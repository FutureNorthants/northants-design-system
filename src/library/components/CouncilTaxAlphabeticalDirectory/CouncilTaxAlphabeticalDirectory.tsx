import React, { useState, useContext, useEffect } from 'react';
import { CouncilTaxAlphabeticalDirectoryProps } from './CouncilTaxAlphabeticalDirectory.types';
import * as Styles from './CouncilTaxAlphabeticalDirectory.styles';
import axios from 'axios';
import { ParishApiUrl } from '../../helpers/api-helpers';
import { ThemeContext } from 'styled-components';
import LoadingSpinner from '../../components/LoadingSpinner/LoadingSpinner';

const CouncilTaxAlphabeticalDirectory: React.FunctionComponent<CouncilTaxAlphabeticalDirectoryProps> = () => {
  const themeContext = useContext(ThemeContext);
  const [data, setData] = useState([]);
  const [parish, setCurrentParish] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setisError] = useState(false);
  const [errorText, setErrorText] = useState('');

  useEffect(() => {
    getParishData();
  }, []);

  /**
   * take the data we get from the API and make it how we want it
   * @param data
   * @returns
   */
  const formatParishData = (data) => {
    const sortData = data.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.banding_parish[0];
      // if there is no property in accumulator with this letter create it
      if (!r[group]) r[group] = { group, children: [{ title: e.banding_parish, values: e.bands }] };
      // if there is push current element to children array for that letter
      else r[group].children.push({ title: e.banding_parish, values: e.bands });
      // return accumulator
      return r;
    }, {});

    const correctedData = Object.keys(sortData).map((west, i) => {
      return sortData[west];
    });

    return correctedData;
  };

  /**
   * Fetch the data from the API
   */
  const getParishData = async () => {
    axios({
      method: 'GET',
      url: `${ParishApiUrl(themeContext.cardinal_name)}`,
      // headers: { 'x-api-key': `${PostCodeAddressSearchApiKey}` }
    })
      .then((response) => {
        if (response.data.hasOwnProperty('parishes') && response.data.parishes.length > 0) {
          setData(formatParishData(response.data.parishes));
          setIsLoading(false);
        } else {
          console.log(response);
          handleError(true);
        }
      })
      .catch((error) => {
        setIsLoading(false);
        handleError(true);
        console.log(error);
      });
  };

  /**
   * Is there an error and if so what is it
   * @param error boolean
   * @param errorMsg string
   */
  const handleError = (error, errorMsg = 'There was an issue fetching the parish data. Please try again later.') => {
    console.log(error, errorMsg);
    setisError(error);
    setErrorText(errorMsg);
  };

  const sortedData = data
    .sort(function (a, b) {
      if (a.group.toLowerCase() < b.group.toLowerCase()) {
        return -1;
      }
      if (a.group.toLowerCase() > b.group.toLowerCase()) {
        return 1;
      }
      return 0;
    })
    .map((letterData) => {
      letterData.children.sort(function (a, b) {
        if (a.title.toLowerCase() < b.title.toLowerCase()) {
          return -1;
        }
        if (a.title.toLowerCase() > b.title.toLowerCase()) {
          return 1;
        }
        return 0;
      });

      return letterData;
    });

  return (
    <Styles.Container data-testid="AlphabeticalDirectory">
      {isError && <Styles.ErrorText>{errorText}</Styles.ErrorText>}
      {isLoading ? (
        <Styles.LoadingContainer>
          <LoadingSpinner />
          <p>Loading...</p>
        </Styles.LoadingContainer>
      ) : (
        <>
          {parish === null ? (
            <>
              {sortedData.map((letter, i) => (
                <Styles.Row key={i}>
                  <Styles.Letter>{letter.group}</Styles.Letter>
                  <Styles.Data>
                    {letter.children.map((letterData, i) => (
                      <Styles.Link onClick={() => setCurrentParish(letterData)} key={i}>
                        {letterData.title}
                      </Styles.Link>
                    ))}
                  </Styles.Data>
                </Styles.Row>
              ))}
            </>
          ) : (
            <>
              <Styles.BackButton onClick={() => setCurrentParish(null)}>Back</Styles.BackButton>

              <div className="table-container">
                <table>
                  <caption>{`Council tax charges for ${parish.title}`}</caption>
                  <thead>
                    <tr>
                      <th scope="col">Bands</th>
                    </tr>
                  </thead>
                  <tbody>
                    {Object.keys(parish.values).map((band, i) => (
                      <tr key={i}>
                        <th scope="row">{band.toUpperCase()}</th>
                        <td>
                          {Number(parish.values[band]).toLocaleString('en-GB', { style: 'currency', currency: 'GBP' })}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </>
      )}
    </Styles.Container>
  );
};

export default CouncilTaxAlphabeticalDirectory;
