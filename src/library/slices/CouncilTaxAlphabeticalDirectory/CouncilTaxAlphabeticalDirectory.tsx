import React, { useState, useEffect, useRef } from 'react';
import {
  BandingAPIResponse,
  CouncilTaxAlphabeticalDirectoryProps,
  SortedData,
  SortedParish,
} from './CouncilTaxAlphabeticalDirectory.types';
import * as Styles from './CouncilTaxAlphabeticalDirectory.styles';
import Column from '../../components/Column/Column';
import Row from '../../components/Row/Row';

/**
 * An list of parishes, sorted alphabetically, containing parish council tax bands
 */
const CouncilTaxAlphabeticalDirectory: React.FunctionComponent<CouncilTaxAlphabeticalDirectoryProps> = ({
  financialYear,
  parishes,
}) => {
  const [data, setData] = useState<SortedData[]>([]);
  const [parish, setCurrentParish] = useState<SortedParish>(null);
  const directoryRef = useRef(null);

  useEffect(() => {
    setData(formatParishData(parishes));
  }, []);

  const showParish = (sortedParish: SortedParish) => {
    setCurrentParish(sortedParish);
    directoryRef.current.scrollIntoView();
  };

  /**
   * Trim NCP or CP from the end of the parish name
   */
  const trimParishName = (officialParish: string): string => {
    if (officialParish.endsWith('NCP')) {
      return officialParish.slice(0, -4);
    }

    if (officialParish.endsWith('CP')) {
      return officialParish.slice(0, -3);
    }

    return officialParish;
  };

  /**
   * take the data we get from the API and make it how we want it
   * @param data
   * @returns
   */
  const formatParishData = (data: BandingAPIResponse[]) => {
    const sortData = data.reduce((r, e) => {
      // get first letter of name of current element
      let group = e.parish[0];

      if (!r[group]) {
        // there is no property in accumulator with this letter so create it
        r[group] = {
          group,
          children: [{ title: trimParishName(e.parish), values: e.bands }],
        };
      } else {
        // push current element to children array for that letter
        r[group].children.push({ title: trimParishName(e.parish), values: e.bands });
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
    <Styles.Container data-testid="AlphabeticalDirectory" ref={directoryRef}>
      <>
        {parishes.length === 0 && (
          <Styles.ErrorText>There was an issue fetching the parish data. Please try again later.</Styles.ErrorText>
        )}
        {parish === null ? (
          <>
            {sortedData.map((letter, i) => (
              <Styles.Row key={i}>
                <Row>
                  <Column small="full" medium="one-quarter" large="one-quarter">
                    <Styles.Letter>{letter.group}</Styles.Letter>
                  </Column>
                  <Column small="full" medium="three-quarters" large="three-quarters">
                    <Row>
                      {letter.children.map((letterData, i) => (
                        <Column small="one-half" medium="one-half" large="one-half" key={i}>
                          <Styles.Link onClick={() => showParish(letterData)}>{letterData.title}</Styles.Link>
                        </Column>
                      ))}
                    </Row>
                  </Column>
                </Row>
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
