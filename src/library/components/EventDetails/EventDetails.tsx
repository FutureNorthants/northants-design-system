import React from 'react';
import { EventDetailsProps } from './EventDetails.types';
import * as Styles from './EventDetails.styles';
import DynamicIcon from '../DynamicIcon/DynamicIcon';
import dayjs from 'dayjs';

const EventDetails: React.FunctionComponent<EventDetailsProps> = ({
  startTime,
  endTime,
  location,
  hasBorder = true,
  hasMargin = true,
}) => {
  const start = new Date(startTime);
  const end = () => {
    if (!endTime) {
      return '';
    } else {
      const endDate = dayjs(endTime);
      const startDate = dayjs(startTime);
      return 'for ' + endDate.diff(startDate, 'hour') + ' hours';
    }
  };

  return (
    <Styles.Container data-testid="EventDetails" $hasBorder={hasBorder} $hasMargin={hasMargin}>
      <Styles.EventRow>
        <Styles.IconContainer>
          <DynamicIcon icon="events" />
        </Styles.IconContainer>
        <Styles.Details>
          <div>
            <span>{dayjs(startTime).format('dddd D MMMM YYYY [at] h:mm a')} </span>
            {endTime && <span>to {dayjs(endTime).format('dddd D MMMM YYYY [at] h:mm a')}</span>}
          </div>
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
