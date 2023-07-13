import React, { useContext, useEffect, useState } from 'react';
import { DirectoryServiceProps } from './DirectoryService.types';
import * as Styles from './DirectoryService.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Heading from '../../components/Heading/Heading';
import ServiceContact from '../ServiceContact/ServiceContact';
import SummaryList from '../../components/SummaryList/SummaryList';
import {
  transformDescriptionDetails,
  transformService,
  transformSnippet,
  transformTaxonomies,
} from './DirectoryServiceTransform';
import DirectoryMap from '../DirectoryMap/DirectoryMap';
import DirectoryAddToShortList from '../DirectoryAddToShortList/DirectoryAddToShortList';
import DownloadableFiles from '../../slices/DownloadableFiles/DownloadableFiles';
import HeartIcon from '../../components/icons/HeartIcon/HeartIcon';
import { ThemeContext } from 'styled-components';
import { useDirectoryShortListContext } from '../../contexts/DirectoryShortListProvider/DirectoryShortListProvider';
import Button from '../../components/Button/Button';
import ServiceSocialLinks from '../ServiceSocialLinks/ServiceSocialLinks';
import WarningText from '../../slices/WarningText/WarningText';

const DirectoryService: React.FunctionComponent<DirectoryServiceProps> = ({
  id,
  name,
  accreditations,
  description,
  descriptionElement,
  email,
  fees,
  languages,
  organization,
  regular_schedules,
  contacts,
  service_areas,
  service_at_locations,
  service_social_profiles,
  service_taxonomys,
  taxonomiesToShow,
  url,
  uploads,
  shortListPath,
}) => {
  const labelLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];
  const [notServer, setNotServer] = useState<boolean>(false);
  const themeContext = useContext(ThemeContext);
  const {
    favourites: { favourites: favourites },
  } = useDirectoryShortListContext();

  useEffect(() => {
    setNotServer(true);
  }, []);

  return (
    <Styles.Container data-testid="DirectoryService">
      <Row>
        <Column small="full" medium="full" large="full">
          <Row>
            <Column small="full" medium="full" large="full">
              <Styles.ServiceHeader>
                <Heading level={1} text={name} />
                {organization?.logo && (
                  <Styles.ServiceImageOuter>
                    <Styles.ServiceImageContainer>
                      <Styles.ServiceImage src={organization.logo} alt={name + ' logo'} loading="lazy" />
                    </Styles.ServiceImageContainer>
                  </Styles.ServiceImageOuter>
                )}
              </Styles.ServiceHeader>
            </Column>

            <Column small="full" medium="full" large="full">
              {notServer && (
                <Styles.ShortListLinks>
                  {shortListPath && (
                    <Styles.Favourites href={shortListPath}>
                      <HeartIcon colourFill={themeContext.theme_vars.colours.action} /> Shortlist ({favourites.length})
                    </Styles.Favourites>
                  )}
                  <DirectoryAddToShortList
                    id={id}
                    name={name}
                    snippet={transformSnippet(description, 350)}
                    email={email}
                    website={url}
                    phone={contacts?.[0]?.phones?.flatMap((phone) => phone.number).join(', ')}
                  />
                </Styles.ShortListLinks>
              )}
            </Column>
          </Row>
        </Column>
        {service_at_locations.filter((location) => {
          return location.is_visitable != false;
        }).length > 0 && (
          <Column small="full" medium="full" large="full" classes="striped-column">
            <Row>
              <Column small="full" medium="full" large="one-third">
                {service_at_locations
                  ?.filter((location) => {
                    return location.is_visitable != false;
                  })
                  .map((location) => (
                    <div key={location.id}>
                      <Heading level={2} text={location.name} />
                      {location.physical_addresses.map((address) => (
                        <Styles.PhysicalAddress key={address.id}>
                          <p
                            key={address.id}
                            dangerouslySetInnerHTML={{
                              __html: Object.values(address)
                                .filter((item) => item !== '' && item !== address.id)
                                .join(' <br />'),
                            }}
                          />
                          <Button
                            url={`https://google.com/maps/dir//${location.latitude},${location.longitude}`}
                            text="Get directions"
                          />
                        </Styles.PhysicalAddress>
                      ))}
                      {location?.accessibility_for_disabilities.length > 0 && (
                        <>
                          <Heading level={3} text="Other facilities on site" />
                          <ul>
                            {location.accessibility_for_disabilities.map((accessibility) => (
                              <li key={accessibility.id}>{accessibility.accessibility}</li>
                            ))}
                          </ul>
                        </>
                      )}
                    </div>
                  ))}
              </Column>

              <Column small="full" medium="full" large="two-thirds">
                {service_at_locations.filter((location) => {
                  return location.is_visitable != false;
                }).length > 0 &&
                  service_at_locations[0]?.latitude &&
                  service_at_locations[0]?.longitude && (
                    <>
                      {notServer && (
                        <DirectoryMap
                          mapProps={{
                            centre: `${service_at_locations[0].latitude},${service_at_locations[0].longitude}`,
                            imageAltText: `${service_at_locations[0].name} shown on a map`,
                            zoom: 14,
                            size: '640x320',
                            mapMarkers: service_at_locations
                              .filter((location) => {
                                return (
                                  location.latitude != null &&
                                  location.longitude != null &&
                                  location.is_visitable != false
                                );
                              })
                              .map((location, locationIndex) => {
                                return {
                                  lat: parseFloat(location.latitude),
                                  lng: parseFloat(location.longitude),
                                  label: labelLetters[locationIndex],
                                  title: location.name,
                                };
                              }),
                          }}
                        />
                      )}
                      <Styles.MapLink
                        href={`https://www.google.com/maps/search/?api=1&query=${service_at_locations[0].latitude}%2C${service_at_locations[0].longitude}`}
                      >
                        View in Google Maps
                      </Styles.MapLink>
                    </>
                  )}
              </Column>
            </Row>
          </Column>
        )}

        <Column small="full" medium="full" large="full" classes="striped-column">
          <Heading level={2} text="How to contact this service" />

          <ServiceContact email={email} website={url} contacts={contacts} />
        </Column>

        <Column small="full" medium="full" large="full" classes="striped-column">
          <Heading level={2} text="How this service can help" />
          <div>
            <>{descriptionElement}</>
          </div>
          <SummaryList
            terms={transformDescriptionDetails(accreditations, fees, service_areas, languages)}
            hasMargin={false}
          />
          <SummaryList terms={transformTaxonomies(service_taxonomys, taxonomiesToShow)} hasMargin={false} />
        </Column>
        {regular_schedules.length > 0 && (
          <Column small="full" medium="full" large="full" classes="striped-column">
            <Heading level={2} text="Service hours" />
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th scope="col">Weekday</th>
                    <th scope="col">Opens</th>
                    <th scope="col">Closes</th>
                  </tr>
                </thead>
                <tbody>
                  {regular_schedules?.map((schedule, scheduleIndex) => (
                    <tr key={scheduleIndex}>
                      <th>{schedule.weekday}</th>
                      <td>{schedule.opens_at}</td>
                      <td>{schedule.closes_at}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </Column>
        )}
        {uploads?.length > 0 && (
          <Column small="full" medium="full" large="full" classes="striped-column">
            <Heading level={2} text="Some resources that can help" />
            <DownloadableFiles files={uploads} />
          </Column>
        )}
        {service_social_profiles?.length > 0 && (
          <Column small="full" medium="full" large="full" classes="striped-column">
            <Heading level={2} text="Follow this service" />

            <ServiceSocialLinks profiles={service_social_profiles} />
          </Column>
        )}
        {service_at_locations.filter((location) => {
          return location.is_visitable == false;
        }).length > 0 && (
          <Column small="full" medium="full" large="full" classes="striped-column">
            {service_at_locations
              .filter((location) => {
                return location.is_visitable == false;
              })
              .map((location) => (
                <Row>
                  <Column small="full" medium="one-half" large="one-third" key={location.id}>
                    <Heading level={2} text={location.name} />
                    {location.physical_addresses.map((address) => (
                      <Styles.PhysicalAddress key={address.id}>
                        <p
                          key={address.id}
                          dangerouslySetInnerHTML={{
                            __html: Object.values(address)
                              .filter((item) => item !== '' && item !== address.id)
                              .join(' <br />'),
                          }}
                        />
                      </Styles.PhysicalAddress>
                    ))}
                    {location?.accessibility_for_disabilities.length > 0 && (
                      <>
                        <Heading level={3} text="Other facilities on site" />
                        <ul>
                          {location.accessibility_for_disabilities.map((accessibility) => (
                            <li key={accessibility.id}>{accessibility.accessibility}</li>
                          ))}
                        </ul>
                      </>
                    )}
                  </Column>
                  <Column small="full" medium="one-half" large="two-thirds">
                    <WarningText title="Please note" isWarning>
                      <p>This address is not open to visitors.</p>
                    </WarningText>
                  </Column>
                </Row>
              ))}
          </Column>
        )}
      </Row>
    </Styles.Container>
  );
};

export default DirectoryService;
