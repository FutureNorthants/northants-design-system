import React, { useContext, useEffect, useState } from 'react';
import { BinFinderProps } from './BinFinder.types';
import * as Styles from './BinFinder.styles';
import {
  BinFinderApiUrl,
  BinFinderResponseProps,
  PostcodeResultsProps,
  PostcodeSearchApiUrl,
} from '../../helpers/api-helpers';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import axios from 'axios';
import { BinCollectionRecordProps } from '../../components/BinCollection/BinCollection.types';
import DropDownSelect from '../../components/DropDownSelect/DropDownSelect';
import BinCollection from '../../components/BinCollection/BinCollection';
import { useForm, Controller, SubmitHandler } from 'react-hook-form';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Heading from '../../components/Heading/Heading';
import { ThemeContext } from 'styled-components';
import sanitizeHtml from 'sanitize-html';

interface AddressOptionProps {
  title: string;
  value: string;
}

type PostcodeLookupInputs = {
  postcode: string;
  houseNumber: string;
};

const BinFinder: React.FunctionComponent<BinFinderProps> = ({ title, contactInfo }) => {
  const [uprn, setUprn] = useState<string>('');
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [addressOptions, setAddressOptions] = useState<AddressOptionProps[]>([]);
  const [binCollections, setBinCollections] = useState<BinCollectionRecordProps[]>([]);
  const [selectAddressError, setSelectAddressError] = useState<boolean>(false);
  const [calendar, setCalendar] = useState<string>('');
  const themeContext = useContext(ThemeContext);
  const [showFirstLine, setShowFirstLine] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
    getValues,
    setValue,
    setError,
  } = useForm<PostcodeLookupInputs>({
    defaultValues: {
      postcode: '',
      houseNumber: '',
    },
  });

  useEffect(() => {
    if (uprn) {
      getBinCollections();
    }
  }, [uprn]);

  const onSubmit: SubmitHandler<PostcodeLookupInputs> = (data) => {
    setIsLoading(true);
    setIsError(undefined);

    const formattedPostcode = data.postcode.replace(/ /g, '').substring(0, 10);
    const formattedHouseNumber = data.houseNumber.trim();

    axios
      .get<PostcodeResultsProps>(`${PostcodeSearchApiUrl}${formattedPostcode}?address=${formattedHouseNumber}`)
      .then((response) => {
        setIsLoading(false);

        if (response.data.addresses?.length < 1) {
          setIsError('No addresses found.');
          return;
        }

        if (
          response.data.unitaries?.length === 1 &&
          response.data.unitaries[0].name.toLowerCase() !== themeContext.theme_vars.cardinal_name
        ) {
          setError('postcode', {
            type: 'custom',
            message: `This postcode is not in ${themeContext.theme_vars.full_name}.`,
          });
          return;
        }

        if (response.data?.addresses?.length === 1) {
          setUprn(response.data.addresses[0].uprn);
          setAddress(response.data.addresses[0].single_line_address);
        } else if (response.data.total_pages > 1) {
          if (showFirstLine) {
            setError('houseNumber', {
              type: 'custom',
              message:
                'This address could not be found based on the information given. Please try entering further information.',
            });
          }
          setShowFirstLine(true);
        } else {
          const options: AddressOptionProps[] = response.data.addresses.map((item) => {
            return {
              title: item.single_line_address,
              value: item.uprn,
            };
          });
          setAddressOptions(options);
        }
      })
      .catch((error) => {
        setIsLoading(false);

        if (error.response?.data?.status === 'ERROR invalid postcode format.') {
          setError('postcode', { type: 'custom', message: 'The postcode format is invalid.' });
          return;
        }

        const house = getValues('houseNumber');
        if (house) {
          setError('houseNumber', {
            type: 'custom',
            message: 'We were unable to find this address. Please check and try again.',
          });
        } else {
          setError('postcode', {
            type: 'custom',
            message: `We were unable to find an address for this postcode in ${themeContext.theme_vars.full_name}.`,
          });
        }
      });
  };

  const handleAddressChange = (e) => {
    e.preventDefault();
    setSelectAddressError(false);

    if (selectedAddress === '') {
      setSelectAddressError(true);
      return;
    }

    const singleAddress = addressOptions.find((addressItem) => {
      return String(addressItem.value) === selectedAddress;
    });

    setUprn(singleAddress.value);
    setAddress(singleAddress.title);
  };

  const resetForm = () => {
    setAddressOptions([]);
    setUprn('');
    setAddress('');
    setBinCollections([]);
    setCalendar('');
    setValue('houseNumber', '');
    setValue('postcode', '');
    setShowFirstLine(false);
    setIsError(undefined);
  };

  const getBinCollections = async () => {
    setIsLoading(true);
    setBinCollections([]);
    setCalendar('');

    axios
      .get<BinFinderResponseProps>(`${BinFinderApiUrl}${uprn}`)
      .then((response) => {
        setIsLoading(false);
        if (response.data.collectionItems.length > 0) {
          const formattedTypes = response.data.collectionItems.map((item) => {
            item.type = item.type === 'recycling-boxes' ? 'recycling_boxes' : item.type;
            return item;
          });
          setBinCollections(formattedTypes);
          setCalendar(response.data.calendar);
        }
      })
      .catch(() => {
        setIsLoading(false);
        setIsError('Error getting bin collections.');
      });
  };

  return (
    <Styles.Container data-testid="BinFinder">
      {title && (
        <Styles.TitleContainer>
          <Heading level={2} text={title} />
        </Styles.TitleContainer>
      )}

      {uprn === '' ? (
        <>
          {addressOptions.length === 0 && (
            <FormWithLine
              onSubmit={handleSubmit(onSubmit)}
              isError={errors.postcode || errors.houseNumber ? true : false}
              hideLine={false}
            >
              <Row>
                <Column small="full" medium="full" large="full">
                  <Styles.Label htmlFor="postcode">Postcode</Styles.Label>
                  <Controller
                    name="postcode"
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="text"
                        name="postcode"
                        id="postcode"
                        onChange={onChange}
                        value={value}
                        isErrored={errors.postcode ? true : false}
                        errorText={
                          !errors.postcode
                            ? ''
                            : errors.postcode?.message
                            ? errors.postcode.message
                            : 'The postcode is required.'
                        }
                      />
                    )}
                  />
                </Column>
                {showFirstLine && (
                  <>
                    <Column small="full" medium="full" large="full">
                      <p>
                        There are several addresses for this postcode. Please enter the full first line of your address.
                      </p>
                    </Column>
                    <Column small="full" medium="full" large="full">
                      <Styles.Label htmlFor="houseNumber">Full first line of address</Styles.Label>
                      <Controller
                        name="houseNumber"
                        control={control}
                        rules={{ maxLength: 50 }}
                        render={({ field: { onChange, value } }) => (
                          <Input
                            type="text"
                            name="houseNumber"
                            id="houseNumber"
                            onChange={onChange}
                            value={value}
                            isErrored={errors.houseNumber ? true : false}
                            isFullWidth
                            errorText={
                              !errors.houseNumber
                                ? ''
                                : errors.houseNumber?.message
                                ? errors.houseNumber.message
                                : 'The first line of address must be below 50 characters.'
                            }
                          />
                        )}
                      />
                    </Column>
                  </>
                )}
                <Column small="full" medium="full" large="full">
                  <FormButton type="submit" aria-label="Submit" text="Find" />
                </Column>
              </Row>
            </FormWithLine>
          )}

          {addressOptions.length > 0 && (
            <FormWithLine onSubmit={handleAddressChange} isError={selectAddressError}>
              <Row>
                <Column small="full" medium="full" large="full">
                  <DropDownSelect
                    onChange={(e) => setSelectedAddress(e.target.value)}
                    id="address"
                    label="Select your address"
                    options={[...[{ title: 'Choose an option', value: '' }], ...addressOptions]}
                    isErrored={selectAddressError}
                    errorText={selectAddressError ? 'The address is required.' : ''}
                  />
                </Column>
                <Column small="full" medium="full" large="full">
                  <FormButton type="submit" aria-label="Submit" text="Submit" />
                </Column>
                <Column small="full" medium="full" large="full">
                  <Styles.StartAgain onClick={() => resetForm()} type="button">
                    Check another postcode
                  </Styles.StartAgain>
                </Column>
              </Row>
            </FormWithLine>
          )}
        </>
      ) : (
        <Styles.CollectionContainer>
          <Row>
            <Column small="full" medium="full" large="full">
              <BinCollection address={address} binCollections={binCollections} calendar={calendar} />
              {binCollections.length === 0 && !isLoading && (
                <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(contactInfo) }} />
              )}
            </Column>
            {!isLoading && (
              <Column small="full" medium="full" large="full">
                <Styles.StartAgain onClick={() => resetForm()} type="button">
                  Check another postcode
                </Styles.StartAgain>
              </Column>
            )}
          </Row>
        </Styles.CollectionContainer>
      )}
      {isLoading && (
        <Styles.LoadingContainer>
          <LoadingSpinner />
        </Styles.LoadingContainer>
      )}
      {isError && (
        <Row>
          <Column small="full" medium="full" large="full">
            <Styles.Error>{isError}</Styles.Error>
          </Column>
        </Row>
      )}
    </Styles.Container>
  );
};

export default BinFinder;
