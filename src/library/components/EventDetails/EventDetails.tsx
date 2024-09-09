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
  const end = () => {
    if (!endTime) {
      return '';
    } else {
      const endDate = dayjs(endTime);
      const startDate = dayjs(startTime);

      if (startDate.format('YYYY-MM-DD') === endDate.format('YYYY-MM-DD')) {
        return `to ${endDate.format('h:mm a')}`;
      } else {
        return `to ${endDate.format('dddd D MMMM YYYY [at] h:mm a')}`;
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
            <span>{dayjs(startTime).format('dddd D MMMM YYYY [at] h:mm a')} </span>
            {endTime && <span>{end()}</span>}
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
