import React from 'react';
import { EventDetailsProps } from './EventDetails.types';
import * as Styles from './EventDetails.styles';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';
import { formatDateRange } from '../../helpers/date-time-helpers';

const EventDetails: React.FunctionComponent<EventDetailsProps> = ({
  startTime,
  endTime,
  location,
  hasBorder = true,
  hasMargin = true,
}) => {
  return (
    <Styles.Container data-testid="EventDetails" $hasBorder={hasBorder} $hasMargin={hasMargin}>
      <Styles.EventRow>
        <HeadingWithIcon icon="events" level={4} text={formatDateRange(startTime, endTime)} hasHover={false} />
      </Styles.EventRow>
      <Styles.EventRow>
        <HeadingWithIcon icon="address" level={4} text={location} hasHover={false} />
      </Styles.EventRow>
    </Styles.Container>
  );
};

export default EventDetails;
