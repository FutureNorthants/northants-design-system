import React from 'react';
import { RelatedEventsProps } from './RelatedEvents.types';
import * as Styles from './RelatedEvents.styles';
import EventLink from '../EventLink/EventLink';

// A list of related events
const RelatedEvents: React.FunctionComponent<RelatedEventsProps> = ({ title, events }) => (
  <Styles.Container data-testid="RelatedEvents">
    <Styles.Title>{title}</Styles.Title>
    <Styles.List>
      {events.map((event, index) => (
        <Styles.ListItem key={index}>
          <EventLink
            title={event.title}
            startTime={event.startTime}
            endTime={event.endTime}
            showSummary={false}
            url={event.url}
            location={event.location}
            hasPadding={false}
          />
        </Styles.ListItem>
      ))}
    </Styles.List>
  </Styles.Container>
);

export default RelatedEvents;
