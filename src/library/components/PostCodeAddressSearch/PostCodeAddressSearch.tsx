import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import axios from 'axios';
import { PostCodeAddressSearchProps } from './PostCodeAddressSearch.types';
import * as Styles from './PostCodeAddressSearch.styles';
import HintText from '../../components/HintText/HintText';
import FormWithLine from '../../components/FormWithLine/FormWithLine';
import Input from '../../components/Input/Input';
import FormButton from '../../components/FormButton/FormButton';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';
import { defaultResults } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';
import { PostcodeSearchApiUrl } from '../../helpers/api-helpers';
import { usePostcodeAddressContext } from '../../contexts/PostCodeAddressProvider/PostCodeAddressProvider';

/**
 * The functionality for searching for a postcode
 */
const PostCodeAddressSearch: React.FunctionComponent<PostCodeAddressSearchProps> = ({
  title = 'Enter your postcode to find your area',
  formError = false,
  otherCouncilLink,
  signPostLinks,
  isUnitary = false,
}) => {
  const themeContext = useContext(ThemeContext);
  const {
    postcodeValue: { postcode: postcode, setPostcode: setPostCode },
    resultsValue: { results: results, setResults: setResults },
  } = usePostcodeAddressContext();
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setisError] = useState<boolean>(formError);
  const [errorText, setErrorText] = useState('');
  const [addressErrorText, setAddressErrorText] = useState('');
  const [currentPostcode, setCurrentPostcode] = useState<string | undefined>('');
  const [filterAddress, setFilterAddress] = useState<boolean>(false);

  /**
   * Postcode form submission handler
   * @param e
   */
  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrentPostcode(e.target.postcode.value);
    if (e.target.postcode.value === '') {
      handleError(true, 'You need to enter a postcode');
    } else {
      setResults(defaultResults);
      setPostCode(e.target.postcode.value);
      setIsLoading(true);
      checkPostcode(e.target.postcode.value, e.target?.address_search ? e.target.address_search.value : '');
    }
  };

  /**
   * Do the actual postcode lookup
   * This method only returns results if postcode is within north / west
   * @param postcode string
   */
  const checkPostcode = async (postcode, address) => {
    setErrorText(null);
    setAddressErrorText(null);
    setisError(false);
    const addressSearch = address != '' ? `?address=${address}` : '';
    axios({
      method: 'GET',
      url: `${PostcodeSearchApiUrl}${postcode.replace(/ /g, '')}${addressSearch}`,
    })
      .then((response) => {
        setIsLoading(false);
        if (response.data?.total_records > 0) {
          if (response.data.total_pages > 1) {
            // Trigger advanced search to filter address
            setFilterAddress(true);
          }

          setResults(response.data);
        } else {
          handleError(true);
          setResults(defaultResults);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(true);
        setResults(defaultResults);
      });
  };

  /**
   * Is there an error and if so what is it
   * @param error boolean
   * @param errorMsg string
   */
  const handleError = (
    error,
    errorMsg = 'There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new post codes.'
  ) => {
    if (filterAddress) {
      setAddressErrorText('No matching addresses found. Please try another search term.');
    } else {
      setErrorText(errorMsg);
    }

    setisError(error);
  };

  return (
    <Styles.Container data-testid="PostCodeAddressSearch">
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

        <Styles.FormContainer isLoading={isLoading}>
          <Styles.Label htmlFor="postcode">
            Enter your postcode
            <HintText text={themeContext.cardinal_name === 'north' ? 'For example NN16 0AP' : 'For example NN1 1DE'} />
            <Input
              type="text"
              placeholder="Enter a postcode"
              name="postcode"
              errorText={errorText}
              isErrored={isError}
            />
          </Styles.Label>

          {filterAddress && (
            <>
              <p>
                <strong>
                  {Number(results.total_records).toLocaleString('en-GB')}{' '}
                  {Number(results.total_records) > 1 ? `addresses` : `address`} found.
                </strong>
              </p>
              <Styles.Label htmlFor="address_search">
                Enter part of your address to filter results
                <HintText text="For example, Room 2, Flat 4" />
                <Input
                  type="text"
                  placeholder="Enter part of address"
                  name="address_search"
                  errorText={addressErrorText}
                  isErrored={isError}
                />
              </Styles.Label>
            </>
          )}

          <FormButton type="submit" aria-label="Submit" text="Search" />
        </Styles.FormContainer>
      </FormWithLine>
    </Styles.Container>
  );
};

export default PostCodeAddressSearch;
