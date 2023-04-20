import React, { useEffect, useState } from 'react';
import { DirectoryShortListProps } from './DirectoryShortList.types';
import * as Styles from './DirectoryShortList.styles';
import {
  DirectoryShortListProvider,
  useDirectoryShortListContext,
} from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import DirectoryAddToShortList from '../DirectoryAddToShortList/DirectoryAddToShortList';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import SummaryList from '../../components/SummaryList/SummaryList';
import { transformService } from '../DirectoryService/DirectoryServiceTransform';
import QRCode from 'react-qr-code';

const DirectoryShortList: React.FunctionComponent<DirectoryShortListProps> = ({ directoryPath }) => {
  const {
    favourites: { favourites: favourites, setFavourites: setFavourites },
    toggleFavourites: toggleFavourites,
    isFavourite: isFavourite,
  } = useDirectoryShortListContext();
  const [notServer, setNotServer] = useState<boolean>(false);

  useEffect(() => {
    setNotServer(true);
  }, []);

  return (
    <Styles.Container data-testid="DirectoryShortList">
      {notServer && (
        <DirectoryShortListProvider>
          <Row>
            {favourites.length > 0 ? (
              <>
                <Column small="full" medium="full" large="full">
                  <Styles.PrintContainer>
                    <Styles.PrintButton onClick={() => window.print()}>Print Shortlist</Styles.PrintButton>
                  </Styles.PrintContainer>
                </Column>
                {favourites.map((favourite) => (
                  <Column key={favourite.id} small="full" medium="full" large="full">
                    <Styles.FavouriteContainer>
                      <Row>
                        <Column small="full" medium="full" large="full">
                          <Styles.QRCodeContainer>
                            <QRCode
                              value={`${directoryPath}/${favourite.id}`}
                              size={256}
                              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                              viewBox={`0 0 256 256`}
                            />
                          </Styles.QRCodeContainer>
                          <Styles.ServiceLink href={`${directoryPath}/${favourite.id}`}>
                            {favourite.name}
                          </Styles.ServiceLink>
                          <Styles.PrintLink>
                            <p>{`${directoryPath}/${favourite.id}`}</p>
                          </Styles.PrintLink>
                        </Column>
                        <Column small="full" medium="full" large="one-half">
                          <div>{favourite.snippet}</div>
                        </Column>
                        <Column small="full" medium="full" large="one-half">
                          <SummaryList
                            terms={transformService(favourite.email, favourite.website, favourite.phone)}
                            hasMargin={false}
                          />
                        </Column>
                        <Column small="full" medium="full" large="full">
                          <Styles.AddContainer>
                            <DirectoryAddToShortList
                              id={favourite.id}
                              name={favourite.name}
                              snippet={favourite.snippet}
                              email={favourite.email}
                              website={favourite.website}
                              phone={favourite.phone}
                            />
                          </Styles.AddContainer>
                        </Column>
                      </Row>
                    </Styles.FavouriteContainer>
                  </Column>
                ))}
              </>
            ) : (
              <Column small="full" medium="full" large="full">
                <Styles.FavouriteContainer>
                  <p>No items in the shortlist</p>
                </Styles.FavouriteContainer>
              </Column>
            )}
          </Row>
        </DirectoryShortListProvider>
      )}
    </Styles.Container>
  );
};

export default DirectoryShortList;
