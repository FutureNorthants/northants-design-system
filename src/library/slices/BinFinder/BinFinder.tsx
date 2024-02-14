import React, { useState } from 'react';
import { BinFinderProps } from './BinFinder.types';
import * as Styles from './BinFinder.styles';
import { PostcodeResultsProps, PostcodeSearchApiUrl } from '../../helpers/api-helpers';
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

interface AddressOptionProps {
  title: string;
  value: string;
}

type PostcodeLookupInputs = {
  postcode: string;
  houseNumber: string;
};

const BinFinder: React.FunctionComponent<BinFinderProps> = ({ title }) => {
  const [uprn, setUprn] = useState<string>('');
  const [isError, setIsError] = useState<string | undefined>(undefined);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [address, setAddress] = useState<string>('');
  const [selectedAddress, setSelectedAddress] = useState<string>('');
  const [addressOptions, setAddressOptions] = useState<AddressOptionProps[]>([]);
  const [binCollections, setBinCollections] = useState<BinCollectionRecordProps[]>([]);
  const [selectAddressError, setSelectAddressError] = useState<boolean>(false);
  const [calendar, setCalendar] = useState<string>('');

  const {
    register,
    handleSubmit,
    watch,
    control,
    formState: { errors },
  } = useForm<PostcodeLookupInputs>({
    defaultValues: {
      postcode: '',
      houseNumber: '',
    },
  });

  const onSubmit: SubmitHandler<PostcodeLookupInputs> = (data) => {
    setIsLoading(true);
    setIsError(undefined);

    axios({
      method: 'GET',
      url: `${PostcodeSearchApiUrl}${data.postcode.replace(/ /g, '').substring(0, 10)}?address=${data.houseNumber}`,
    })
      .then((response) => {
        setIsLoading(false);

        if (response.data.addresses?.length < 1) {
          setIsError('No matching results');
          return;
        }

        if (response.data?.addresses?.length === 1) {
          setUprn(response.data.addresses[0].uprn);
          setAddress(response.data.addresses[0].single_line_address);
          getBinCollections();
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
      .catch(() => {
        setIsLoading(false);
        setIsError('No matching addresses found. Please try again.');
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
    getBinCollections();
  };

  const resetForm = () => {
    setAddressOptions([]);
    setUprn('');
    setAddress('');
  };

  const getBinCollections = () => {
    setIsLoading(true);

    setBinCollections([
      {
        date: '2024-02-12',
        type: 'food',
      },
      {
        date: '2024-02-12',
        type: 'recycling',
      },
    ]);
    setCalendar('https://www.southnorthants.gov.uk/download/downloads/id/7346/bin-collection-calendar-2022.pdf');
    setIsLoading(false);

    // axios({
    //   method: 'GET',
    //   url: '',
    // })
    //   .then((response) => {
    //     setIsLoading(false);
    //     if (response.data.record_items.length > 0) {
    //       setBinCollections(response.data.record_items);
    //     } else {
    //       setIsError('No bin collection information found.');
    //     }
    //   })
    //   .catch(() => {
    //     setIsLoading(false);
    //     setIsError('Error occurred getting bin collections.');
    //   });
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
            <FormWithLine onSubmit={handleSubmit(onSubmit)} isError={isError ? true : false}>
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
                        placeholder="Enter a postcode"
                        name="postcode"
                        id="postcode"
                        onChange={onChange}
                        value={value}
                        isErrored={errors.postcode ? true : false}
                        errorText={errors.postcode ? 'The postcode is required.' : ''}
                      />
                    )}
                  />
                </Column>
                <Column small="full" medium="full" large="full">
                  <Styles.Label htmlFor="houseNumber">House name or number</Styles.Label>
                  <Controller
                    name="houseNumber"
                    control={control}
                    rules={{ maxLength: 30 }}
                    render={({ field: { onChange, value } }) => (
                      <Input
                        type="text"
                        name="houseNumber"
                        id="houseNumber"
                        placeholder="Enter your house name or number"
                        onChange={onChange}
                        value={value}
                        isErrored={errors.houseNumber ? true : false}
                        errorText={errors.houseNumber ? 'The house name or number must be below 30 characters.' : ''}
                      />
                    )}
                  />
                </Column>
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
            </Column>
            <Column small="full" medium="full" large="full">
              <Styles.StartAgain onClick={() => resetForm()} type="button">
                Check another postcode
              </Styles.StartAgain>
            </Column>
          </Row>
        </Styles.CollectionContainer>
      )}
      {isLoading && <LoadingSpinner />}
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
