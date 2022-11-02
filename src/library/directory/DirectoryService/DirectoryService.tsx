import React from 'react';

import { DirectoryServiceProps } from './DirectoryService.types';
import * as Styles from './DirectoryService.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import Heading from '../../components/Heading/Heading';
import ServiceContact from '../ServiceContact/ServiceContact';
import SummaryList from '../../components/SummaryList/SummaryList';
import { transformService } from './DirectoryServiceTransform';
import sanitizeHtml from 'sanitize-html';

const DirectoryService: React.FunctionComponent<DirectoryServiceProps> = ({
  name,
  descriptionElement,
  email,
  regular_schedules,
  contacts,
  service_at_locations,
  url,
}) => {
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

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
                </Column>
                <Column small="full" medium="full" large="one-half">
                  <Styles.MapContainer>
                    <Styles.MapImage
                      src={`https://maps.googleapis.com/maps/api/staticmap?size=640x320&maptype=roadmap&markers=size:large%7Ccolor:red%7C${location.latitude},${location.longitude}&key=${apiKey}`}
                      alt={location.name}
                    />
                  </Styles.MapContainer>
                </Column>
              </Row>
            ))}
          </Column>
        )}

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
          <Heading level={2} text="About this service" />
          <div>
            <>{descriptionElement}</>
          </div>
        </Column>
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
