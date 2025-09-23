import React, { useState, useEffect } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import { PostCodeSearchProps, AddressOptionInfoProps, AddressOption } from './PostCodeSearch.types';
import * as Styles from './PostCodeSearch.styles';
import HintText from '../HintText/HintText';
import FormWithLine from '../FormWithLine/FormWithLine';
import Input from '../Input/Input';
import FormButton from '../FormButton/FormButton';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import Button from '../Button/Button';
import { SignpostLinks } from '../../structure/PageStructures';
import DropDownSelect from '../DropDownSelect/DropDownSelect';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';
import { PostcodeResultsProps, PostcodeSearchApiUrl } from '../../helpers/api-helpers';
import { GeneratedTheme } from '../../../themes/ThemeVars.types';

/**
 * The functionality for searching for a postcode
 */
const PostCodeSearch: React.FunctionComponent<PostCodeSearchProps> = ({
  title = 'Enter your postcode to find your area',
  formError = false,
  otherCouncilLink,
  signPostLinks,
  isUnitary = false,
  sovereignType = 'sovereigns',
}) => {
  const themeContext = useContext(ThemeContext) as GeneratedTheme;
  const [open, setOpen] = useState<boolean>(false);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(formError);
  const [errorText, setErrorText] = useState<string>('');
  const [currentPostcode, setCurrentPostcode] = useState<string>('');
  const [isMultiple, setIsMultiple] = useState<boolean>(false);
  const [addressOptions, setAddressOptions] = useState<AddressOption[]>([]);

  const defaultArray: AddressOptionInfoProps = {
    sovereigns: [],
    wasteSovereigns: [],
    unitaries: [],
    addresses: [],
  };

  const [responseData, setResponseData] = useState(defaultArray);

  const clearData = () => {
    setResponseData(defaultArray);
    setCurrentPostcode('');
    setAddressOptions([]);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const enteredPostcode = e.target.elements.postcode.value;
    setCurrentPostcode(enteredPostcode);
    if (enteredPostcode === '') {
      handleError(true, 'You need to enter a postcode');
    } else {
      setIsLoading(true);
      checkPostcode(enteredPostcode);
    }
  };

  const checkPostcode = async (postcode) => {
    axios({
      method: 'GET',
      url: `${PostcodeSearchApiUrl}${postcode.replace(/ /g, '').substring(0, 10)}`,
    })
      .then((response) => {
        setIsLoading(false);

        if (response.data.unitaries?.length > 0) {
          setResponseData(response.data);
        } else {
          handleError(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(true);
      });
  };

  const handleError = (
    error,
    errorMsg = 'There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new postcodes.'
  ) => {
    setErrorText(errorMsg);
    setisError(error);
  };

  useEffect(() => {
    if (responseData[sovereignType]?.length > 0) {
      if (isError) {
        handleError(false, '');
      }
      if (responseData[sovereignType]?.length > 1) {
        setIsMultiple(true);
        responseData.addresses.map((address) => {
          setAddressOptions((addressOptions) => [
            ...addressOptions,
            {
              title:
                address.single_line_address
                  .split(',')[0]
                  .toLowerCase()
                  .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())) +
                ', ' +
                address.single_line_address
                  .split(',')[1]
                  .toLowerCase()
                  .replace(/\w\S*/g, (w) => w.replace(/^\w/, (c) => c.toUpperCase())),
              value: address.uprn,
              info: [
                {
                  sovereigns: [
                    {
                      name: address.sovereign,
                    },
                  ],
                  wasteSovereigns: [
                    {
                      name: address.wastesovereign,
                    },
                  ],
                  unitaries: [
                    {
                      name: address.unitary,
                    },
                  ],
                  addresses: [],
                },
              ],
            },
          ]);
        });
      }
    }
  }, [responseData]);

  function handleAddressChange(e) {
    if (e.target.value !== '') {
      const singleAddress = addressOptions.find((address) => address.value === e.target.value);
      setIsMultiple(false);
      setResponseData(singleAddress.info[0]);
      setCurrentPostcode(currentPostcode + ' (' + singleAddress.title + ')');
    }
  }

  return (
    <Styles.Container data-testid="PostCodeSearch">
      <Styles.DropDownButton onClick={() => setOpen(open ? false : true)}>
        <Styles.IconWrapper>
          <ChevronIcon direction={open ? 'down' : 'right'} colourFill={themeContext.theme_vars.colours.black} />
        </Styles.IconWrapper>
        {title}
      </Styles.DropDownButton>
      {open && (
        <Styles.DropDownContent>
          {responseData.unitaries.length === 0 ? (
            <FormWithLine
              onSubmit={(e) => {
                handleSubmit(e);
              }}
              isError={isError}
              lineColour={themeContext.theme_vars.colours.grey_dark}
            >
              {isLoading && (
                <Styles.LoadingContainer>
                  <LoadingSpinner />
                  <p>Loading...</p>
                </Styles.LoadingContainer>
              )}

              <Styles.FormContainer $isLoading={isLoading}>
                <Styles.Label htmlFor="postcode">
                  Enter your postcode
                  <HintText
                    text={themeContext.cardinal_name === 'north' ? 'For example NN16 0AP' : 'For example NN1 1ED'}
                  />
                  <Input
                    type="text"
                    placeholder="Enter a postcode"
                    name="postcode"
                    errorText={errorText}
                    isErrored={isError}
                    maxLength={10}
                  />
                </Styles.Label>

                <FormButton type="submit" aria-label="Submit" text="Find" />
              </Styles.FormContainer>
            </FormWithLine>
          ) : (
            <Styles.PostcodeResult>
              <Styles.Line />
              {isMultiple ? (
                <div className="result">
                  <p>
                    This postcode <strong>{currentPostcode}</strong> includes addresses that are in multiple areas,
                    please select your address so that we can tell you which area you are in.
                  </p>
                  <DropDownSelect
                    onChange={handleAddressChange}
                    id="address"
                    label="Select your address"
                    options={[...[{ title: 'Select an address to continue', value: '' }], ...addressOptions]}
                    data-testid="AddressDropdown"
                  />
                </div>
              ) : isUnitary ? (
                <div className="result">
                  <p>
                    This postcode <strong>{currentPostcode}</strong> is in{' '}
                    <strong>{responseData.unitaries[0].name}</strong>, in the{' '}
                    <strong>{responseData[sovereignType][0].name}</strong> area.
                  </p>

                  {themeContext.theme_vars.cardinal_name !== responseData.unitaries[0].name.toLowerCase() ? (
                    <p>
                      In order to find the right information for you, please visit the{' '}
                      <a href={themeContext.theme_vars.other_council_link} title="Go to the other council">
                        {responseData.unitaries[0].name} website.
                      </a>
                    </p>
                  ) : (
                    <p>
                      You are on the <strong>correct website for this postcode</strong>.
                    </p>
                  )}

                  <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
                </div>
              ) : (
                <div className="result">
                  <p>
                    This postcode <strong>{currentPostcode}</strong> is in{' '}
                    <strong>{responseData.unitaries[0].name} Northamptonshire</strong>, in the{' '}
                    <strong>{responseData[sovereignType][0].name}</strong> area.
                  </p>
                  {themeContext.theme_vars.cardinal_name !==
                    responseData.unitaries[0].name.split(' ')[0].toLowerCase() && (
                    <>
                      <p>
                        In order to find the right information for you, please visit the{' '}
                        {responseData.unitaries[0].name} Northamptonshire website and find your local area (
                        {responseData[sovereignType][0].name}) for this service.
                      </p>

                      <Button
                        size="large"
                        colourOverride={themeContext.theme_vars.other_council_action}
                        text={'Go to ' + responseData.unitaries[0].name + " Northamptonshire's website"}
                        url={otherCouncilLink}
                        isExternal={true}
                      />
                      <br />
                    </>
                  )}
                  <Styles.StartAgain onClick={() => clearData()}>Check another postcode</Styles.StartAgain>
                </div>
              )}
            </Styles.PostcodeResult>
          )}
        </Styles.DropDownContent>
      )}
    </Styles.Container>
  );
};

export default PostCodeSearch;
