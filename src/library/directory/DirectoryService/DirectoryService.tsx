import React from 'react';

import { DirectoryServiceProps, LocationProps } from './DirectoryService.types';
import * as Styles from './DirectoryService.styles';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';
import { Accordion, Heading } from '../../..';
import { AccordionSectionProps } from '../../slices/Accordion/Accordion.types';
import ServiceContact from '../ServiceContact/ServiceContact';
import SummaryList from '../../components/SummaryList/SummaryList';
import { SummaryListProps, SummaryRowProps } from '../../components/SummaryList/SummaryList.types';
import { transformLocation, transformService } from './DirectoryServiceTransform';

const DirectoryService: React.FunctionComponent<DirectoryServiceProps> = ({
  name,
  description,
  email,
  regular_schedules,
  contacts,
  service_at_locations,
  url,
}) => {
  const apiKey: string = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY ?? '';

  const sections: AccordionSectionProps[] = [
    {
      title: 'Opening Hours',
      content: (
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
      ),
    },
    {
      title: 'Prices',
      content: <p>Some prices</p>,
    },
    {
      title: 'Contacts',
      content: (
        <div>
          {contacts?.map((contact, contactIndex) => (
            <ServiceContact {...contact} key={contactIndex} />
          ))}
        </div>
      ),
    },
  ];

  return (
    <Styles.Container data-testid="DirectoryService">
      <Row>
        <Column small="full" medium="full" large="one-half">
          <Heading level={2} text={name} />
          <div dangerouslySetInnerHTML={{ __html: description }} />
        </Column>
        <Column small="full" medium="full" large="one-half">
          <SummaryList terms={transformService(email, url)} />
        </Column>

        {service_at_locations?.map((location, locationIndex) => (
          <Column small="full" medium="full" large="full" key={locationIndex}>
            <Row>
              <Column small="full" medium="one-half" large="one-half">
                <SummaryList terms={transformLocation(location)} />
              </Column>
              <Column small="full" medium="one-half" large="one-half">
                <Styles.MapContainer>
                  <Styles.MapImage
                    src={`https://maps.googleapis.com/maps/api/staticmap?size=640x640&maptype=roadmap&markers=size:large%7Ccolor:red%7C${location.latitude},${location.longitude}&key=${apiKey}`}
                    alt={location.name}
                  />
                </Styles.MapContainer>
              </Column>
            </Row>
          </Column>
        ))}

        <Column small="full" medium="full" large="full">
          <Accordion sections={sections}></Accordion>
        </Column>
      </Row>
    </Styles.Container>
  );
};

export default DirectoryService;
