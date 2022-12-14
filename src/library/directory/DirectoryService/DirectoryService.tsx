import React from 'react';

import { DirectoryServiceProps } from './DirectoryService.types';
import * as Styles from './DirectoryService.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Heading from '../../components/Heading/Heading';
import ServiceContact from '../ServiceContact/ServiceContact';
import SummaryList from '../../components/SummaryList/SummaryList';
import { transformDescriptionDetails, transformService } from './DirectoryServiceTransform';
import DirectoryMap from '../DirectoryMap/DirectoryMap';

const DirectoryService: React.FunctionComponent<DirectoryServiceProps> = ({
  name,
  accreditations,
  descriptionElement,
  email,
  fees,
  languages,
  regular_schedules,
  contacts,
  service_areas,
  service_at_locations,
  url,
}) => {
  const labelLetters: string[] = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 'K', 'L'];

  return (
    <Styles.Container data-testid="DirectoryService">
      <Row>
        <Column small="full" medium="full" large="full">
          <Heading level={1} text={name} />
        </Column>
        {service_at_locations.length > 0 && (
          <Column small="full" medium="full" large="full">
            <Heading level={2} text="Location" />
            {service_at_locations?.map((location, locationIndex) => (
              <Row key={locationIndex}>
                <Column small="full" medium="full" large="one-half">
                  {location.physical_addresses.map((address) => (
                    <p key={address.id}>
                      {address.address_1}
                      <br />
                      {address.city}
                      <br />
                      {address.state_province}
                      <br />
                      {address.postal_code}
                      <br />
                      {address.country}
                    </p>
                  ))}
                  {location?.accessibility_for_disabilities.length > 0 && (
                    <>
                      <Heading level={3} text="Facilities" />
                      <ul>
                        {location.accessibility_for_disabilities.map((accessibility) => (
                          <li key={accessibility.id}>{accessibility.accessibility}</li>
                        ))}
                      </ul>
                    </>
                  )}
                </Column>
                <Column small="full" medium="full" large="one-half">
                  <DirectoryMap
                    mapProps={{
                      centre: `${location.latitude},${location.longitude}`,
                      imageAltText: `${location.name} shown on a map`,
                      zoom: 14,
                      size: '640x320',
                      mapMarkers: [
                        {
                          lat: parseFloat(location.latitude),
                          lng: parseFloat(location.longitude),
                          label: labelLetters[locationIndex],
                          title: location.name,
                        },
                      ],
                    }}
                  />
                  <Styles.MapLink
                    href={`https://www.google.com/maps/search/?api=1&query=${location.latitude}%2C${location.longitude}`}
                  >
                    View in Google Maps
                  </Styles.MapLink>
                </Column>
              </Row>
            ))}
          </Column>
        )}

        <Column small="full" medium="full" large="full">
          <Heading level={2} text="About this service" />
          <div>
            <>{descriptionElement}</>
          </div>
          <SummaryList terms={transformDescriptionDetails(accreditations, fees, service_areas, languages)} />
        </Column>
        {regular_schedules.length > 0 && (
          <Column small="full" medium="full" large="full">
            <Heading level={2} text="Opening times" />
            <div className="table-container">
              <table>
                <thead>
                  <tr>
                    <th>Weekday</th>
                    <th>Opens</th>
                    <th>Closes</th>
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
        <Column small="full" medium="full" large="full">
          <Heading level={2} text="Contact details" />
          <SummaryList terms={transformService(email, url)} hasMargin={false} />
          {contacts?.map((contact, contactIndex) => (
            <ServiceContact {...contact} key={contactIndex} />
          ))}
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryService;