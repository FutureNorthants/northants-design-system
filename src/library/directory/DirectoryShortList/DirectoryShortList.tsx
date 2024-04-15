import React, { useEffect, useState } from 'react';
import { DirectoryShortListProps } from './DirectoryShortList.types';
import * as Styles from './DirectoryShortList.styles';
import { useDirectoryShortListContext } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import DirectoryAddToShortList from '../DirectoryAddToShortList/DirectoryAddToShortList';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import SummaryList from '../../components/SummaryList/SummaryList';
import { transformService } from '../DirectoryService/DirectoryServiceTransform';
import QRCode from 'react-qr-code';
import { PhysicalAddressProps } from '../DirectoryService/DirectoryService.types';

const DirectoryShortList: React.FunctionComponent<DirectoryShortListProps> = ({ directoryPath }) => {
  const {
    favourites: { favourites: favourites },
    clearShortlist,
  } = useDirectoryShortListContext();
  const [notServer, setNotServer] = useState<boolean>(false);

  useEffect(() => {
    setNotServer(true);
  }, []);

  const confirmClear = () => {
    if (window.confirm('Are you sure you want to clear your shortlist?')) {
      clearShortlist();
    }
  };

  const formatAddress = (address: PhysicalAddressProps): string => {
    return Object.values(address)
      .filter((item) => item !== '' && item !== address.id && item !== address.country)
      .join(', ');
  };

  const copyToClipboard = async () => {
    const data = favourites.map((favourite) => {
      const address: string = favourite.addresses.length > 0 ? formatAddress(favourite.addresses[0]) : '';

      return `
Name: ${favourite.name}
Link: ${directoryPath}/${favourite.id}
Address: ${address}
Email: ${favourite.email ?? ''}
Website: ${favourite.website ?? ''}
Telephone: ${favourite.phone ?? ''}
About: ${favourite.snippet.replace(/(\r\n|\n|\r)/gm, '').replace(/\s+/g, ' ') ?? ''}

      `;
    });

    try {
      await navigator.clipboard.writeText(data.join('')).then(() => {
        window.alert('Copied to clipboard');
      });
    } catch {
      window.alert('Unable to copy');
    }
  };

  return (
    <Styles.Container data-testid="DirectoryShortList">
      {notServer && (
        <Row>
          {favourites.length > 0 ? (
            <>
              <Column small="full" medium="full" large="full">
                <Styles.ButtonContainer>
                  <Styles.ClearShortlistButton onClick={confirmClear}>Clear Shortlist</Styles.ClearShortlistButton>
                  <Styles.ActionButton onClick={copyToClipboard}>Copy To Clipboard</Styles.ActionButton>
                  <Styles.ActionButton onClick={() => window.print()}>Print Shortlist</Styles.ActionButton>
                </Styles.ButtonContainer>
              </Column>
              {favourites.map((favourite) => (
                <Column key={favourite.id} small="full" medium="full" large="full" classes="favourite-outer">
                  <Styles.FavouriteContainer>
                    <Row>
                      <Column small="full" medium="full" large="full">
                        <Styles.ServiceLink href={`${directoryPath}/${favourite.id}`}>
                          {favourite.name}
                        </Styles.ServiceLink>
                        <Styles.PrintLink>
                          <p>{`${directoryPath}/${favourite.id}`}</p>
                        </Styles.PrintLink>
                      </Column>
                      <Column small="full" medium="full" large="one-half">
                        <Styles.SnippetContainer>
                          <div>{favourite.snippet}</div>
                          <Styles.QRCodeContainer>
                            <QRCode
                              value={`${directoryPath}/${favourite.id}`}
                              size={256}
                              style={{ height: 'auto', maxWidth: '100%', width: '100%' }}
                              viewBox={`0 0 256 256`}
                            />
                          </Styles.QRCodeContainer>
                        </Styles.SnippetContainer>

                        {favourite.addresses?.length > 0 && (
                          <>
                            <Styles.AddressContainer>
                              <Styles.SubTitle>Address</Styles.SubTitle>
                              {favourite.addresses?.length === 1 ? (
                                <p>{formatAddress(favourite.addresses[0])}</p>
                              ) : (
                                <ul>
                                  {favourite.addresses.map((address) => (
                                    <li key={address.id}>{formatAddress(address)}</li>
                                  ))}
                                </ul>
                              )}
                            </Styles.AddressContainer>
                            <Styles.PrintAddress>
                              <SummaryList
                                terms={[{ term: 'Address', detail: formatAddress(favourite.addresses[0]) }]}
                                hasMargin={false}
                              />
                            </Styles.PrintAddress>
                          </>
                        )}
                      </Column>
                      <Column small="full" medium="full" large="one-half">
                        <SummaryList
                          terms={transformService(favourite.email, favourite.website, favourite.phone)}
                          hasMargin={false}
                        />
                        {favourite.fees && (
                          <SummaryList terms={[{ term: 'Cost', detail: favourite.fees }]} hasMargin={false} />
                        )}
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
                            addresses={favourite.addresses}
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
      )}
    </Styles.Container>
  );
};

export default DirectoryShortList;
