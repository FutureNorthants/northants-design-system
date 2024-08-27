import React from 'react';
import { EventDetailsProps } from './EventDetails.types';
import * as Styles from './EventDetails.styles';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import dayjs from 'dayjs';

const EventDetails: React.FunctionComponent<EventDetailsProps> = ({
  startTime,
  location,
  hasBorder = true,
  hasMargin = true,
}) => {
  const start = new Date(startTime);

  return (
    <Styles.Container data-testid="EventDetails" $hasBorder={hasBorder} $hasMargin={hasMargin}>
      <Styles.EventRow>
        <Styles.IconContainer>
          <DynamicIcon icon="events" />
        </Styles.IconContainer>
        <Styles.Details>
          <span>{dayjs(startTime).format('dddd D MMMM YYYY [at] h:mm a')}</span>
        </Styles.Details>
      </Styles.EventRow>
      <Styles.EventRow>
        <Styles.IconContainer>
          <DynamicIcon icon="address" />
        </Styles.IconContainer>
        <Styles.Details>
          <span>{location}</span>
        </Styles.Details>
      </Styles.EventRow>
    </Styles.Container>
  );
};

export default EventDetails;
