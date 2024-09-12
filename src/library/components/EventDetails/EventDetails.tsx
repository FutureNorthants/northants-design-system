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
  const formatTime = () => {
    if (!endTime) {
      return dayjs(startTime).format('dddd D MMMM YYYY [at] h:mm a');
    } else {
      const endDate = dayjs(endTime);
      const startDate = dayjs(startTime);

      if (startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
        if (startDate.format('HH:mm') === '00:00' && endDate.format('HH:mm') === '23:59') {
          return `${startDate.format('dddd D MMMM YYYY')} - all day`;
        }
        return `${startDate.format('dddd D MMMM YYYY [at] h:mm a')} to ${endDate.format('h:mm a')}`;
      } else {
        return `${startDate.format('dddd D MMMM YYYY [at] h:mm a')} to ${endDate.format('dddd D MMMM YYYY [at] h:mm a')}`;
      }
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
            <span>{formatTime()}</span>
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
