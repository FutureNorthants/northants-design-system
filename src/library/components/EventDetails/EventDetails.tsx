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
  // Format the time to match Gov UK style guide
  // https://www.gov.uk/guidance/style-guide/a-to-z#times
  const formatTime = (dayJsInstance: dayjs.Dayjs): string => {
    if (dayJsInstance.format('HH:mm') === '00:00') {
      return 'midnight';
    }

    if (dayJsInstance.format('HH:mm') === '12:00') {
      return 'midday';
    }

    if (dayJsInstance.format('mm') === '00') {
      return dayJsInstance.format('ha');
    } else {
      return dayJsInstance.format('h:mma');
    }
  };

  // Format the time to match the Gov UK style guide
  // https://www.gov.uk/guidance/style-guide/a-to-z#dates
  const formatDate = (): string => {
    if (!endTime) {
      return dayjs(startTime).format('dddd D MMMM YYYY') + ' at ' + formatTime(dayjs(startTime));
    } else {
      const endDate = dayjs(endTime);
      const startDate = dayjs(startTime);

      if (startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
        if (startDate.format('HH:mm') === '00:00' && endDate.format('HH:mm') === '23:59') {
          return `${startDate.format('dddd D MMMM YYYY')} - all day`;
        }
        return `${startDate.format('dddd D MMMM YYYY')} at ${formatTime(startDate)} to ${formatTime(endDate)}`;
      } else {
        return `${startDate.format('dddd D MMMM YYYY')} at ${formatTime(startDate)} to ${endDate.format('dddd D MMMM YYYY')} at ${formatTime(endDate)}`;
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
            <span>{formatDate()}</span>
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
