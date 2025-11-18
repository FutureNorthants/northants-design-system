import React, { useEffect, useState } from 'react';
import { LocationLookupProps } from './LocationLookup.types';
import * as Styles from './LocationLookup.styles';
import FormWithLine from '../FormWithLine/FormWithLine';
import FormButton from '../FormButton/FormButton';
import axios from 'axios';
import { PostcodeSearchApiUrl } from '../../helpers/api-helpers';
import Input from '../Input/Input';
import Heading from '../Heading/Heading';
import LoadingSpinner from '../LoadingSpinner/LoadingSpinner';

/**
 * A component that either uses geolocation API or the WNC postcode lookup to return a latitude and longitude
 */
const LocationLookup: React.FunctionComponent<LocationLookupProps> = ({
  title,
  latitude,
  setLatitude,
  longitude,
  setLongitude,
}) => {
  const [lookupError, setLookupError] = useState(null);
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const options = {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 10000, // 10 second cache
  };

  const success = (pos) => {
    const coords = pos.coords;
    setLatitude(coords.latitude);
    setLongitude(coords.longitude);
    setIsLoading(false);
  };

  const error = (error) => {
    setLookupError('Unable to determine location.');
    setIsLoading(false);
  };

  const getCurrentPosition = (e) => {
    e.preventDefault();
    setIsLoading(true);
    setLatitude(null);
    setLongitude(null);
    setLookupError(null);
    navigator.geolocation.getCurrentPosition(success, error, options);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMessage(null);
    setLatitude(null);
    setLongitude(null);

    if (e.target.postcode.value === '') {
      setErrorMessage('The postcode is required');
      return;
    }
    setIsLoading(true);
    lookupPostcode(e.target.postcode.value);
  };

  const lookupPostcode = (postcode: string) => {
    axios({
      method: 'GET',
      url: `${PostcodeSearchApiUrl}${postcode.replace(/ /g, '')}`,
    })
      .then((response) => {
        if (response.data?.addresses?.length > 0) {
          setLatitude(response.data.addresses[0].latitude);
          setLongitude(response.data.addresses[0].longitude);
        } else {
          setErrorMessage('Address not found');
        }
        setIsLoading(false);
      })
      .catch(() => {
        setErrorMessage(
          'There is an issue with the postcode you entered, it may not be in Northamptonshire, or if your property is new there may be a 6 week delay for new postcodes.'
        );
        setIsLoading(false);
      });
  };

  const reset = () => {
    setLatitude(null);
    setLongitude(null);
    setErrorMessage(null);
    setLookupError(null);
  };

  return (
    <Styles.Container data-testid="LocationLookup">
      {title && <Heading text={title} level={3} />}

      {latitude && longitude ? (
        <>
          <Styles.LocationFound>Location found</Styles.LocationFound>

          <Styles.ResetButton type="button" onClick={reset}>
            Search again
          </Styles.ResetButton>
        </>
      ) : (
        <>
          {isLoading ? (
            <LoadingSpinner />
          ) : (
            <>
              <FormWithLine onSubmit={getCurrentPosition} hideLine>
                {lookupError && <Styles.ErrorMessage>{lookupError}</Styles.ErrorMessage>}
                <FormButton text="Use current location" size="large" />
              </FormWithLine>
              <FormWithLine onSubmit={(e) => handleSubmit(e)} hideLine>
                <Styles.FormContainer>
                  <div>
                    <Styles.Label htmlFor="postcode">Or enter a postcode</Styles.Label>
                    <Input name="postcode" type="text" isErrored={errorMessage} errorText={errorMessage} isFullWidth />
                  </div>
                  <Styles.ButtonContainer>
                    <FormButton text="Find" size="large" />
                  </Styles.ButtonContainer>
                </Styles.FormContainer>
              </FormWithLine>
            </>
          )}
        </>
      )}
    </Styles.Container>
  );
};

export default LocationLookup;
