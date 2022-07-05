import React, { useState, useEffect } from 'react';
import {
  CouncilTaxAlphabeticalDirectoryProps,
  ParishAPIResponse,
  SortedData,
  SortedParish,
} from './CouncilTaxAlphabeticalDirectory.types';
import * as Styles from './CouncilTaxAlphabeticalDirectory.styles';

/**
 * An list of parishes, sorted alphabetically, containing parish council tax bands
 */
const CouncilTaxAlphabeticalDirectory: React.FunctionComponent<CouncilTaxAlphabeticalDirectoryProps> = ({
  financialYear,
  parishes,
}) => {
  const [data, setData] = useState<SortedData[]>([]);
  const [parish, setCurrentParish] = useState<SortedParish>(null);

  useEffect(() => {
    setData(formatParishData(parishes));
  }, []);

  /**
   * take the data we get from the API and make it how we want it
   * @param data
   * @returns
   */
  const formatParishData = (data: ParishAPIResponse[]) => {
    const sortData = data.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.banding_parish[0];

      if (!r[group]) {
        // there is no property in accumulator with this letter so create it
        r[group] = { group, children: [{ title: e.banding_parish, values: e.bands }] };
      } else {
        // push current element to children array for that letter
        r[group].children.push({ title: e.banding_parish, values: e.bands });
      }

      return r;
    }, {});

    return Object.keys(sortData).map((west, i) => {
      return sortData[west];
    });
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
      <>
        {parishes.length === 0 && (
          <Styles.ErrorText>There was an issue fetching the parish data. Please try again later.</Styles.ErrorText>
        )}
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
                <caption>{`Council tax charges for ${parish.title} in ${financialYear}`}</caption>
                <thead>
                  <tr>
                    <th scope="col">Bands</th>
                  </tr>
                </thead>
                <tbody>
                  {Object.keys(parish.values)
                    .filter((item) => {
                      return item !== '__typename';
                    })
                    .map((band, i) => (
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
    </Styles.Container>
  );
};

export default CouncilTaxAlphabeticalDirectory;
