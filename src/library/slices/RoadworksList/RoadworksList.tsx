import React, { useState } from 'react';
import { Roadwork, RoadworksListProps } from './RoadworksList.types';
import * as Styles from './RoadworksList.styles';
import Input from '../../components/Input/Input';
import DynamicIcon from '../../components/DynamicIcon/DynamicIcon';
import Heading from '../../components/Heading/Heading';
import dayjs from 'dayjs';

/**
 * A filterable list of roadworks
 */
const RoadworksList: React.FunctionComponent<RoadworksListProps> = ({ roadworks, title }) => {
  const [filteredRoadworks, setFilteredRoadworks] = useState<Roadwork[]>(roadworks);

  const handleSearch = (e) => {
    const searchTerm = e.target.value.toLowerCase();
    if (searchTerm != '') {
      const updatedRoadworks = roadworks.filter((roadwork) => {
        return (
          roadwork.description.toLowerCase().includes(searchTerm) ||
          roadwork.detailedLocation.toLocaleLowerCase().includes(searchTerm) ||
          roadwork.trafficManagement.toLowerCase().includes(searchTerm)
        );
      });
      setFilteredRoadworks(updatedRoadworks);
    } else {
      setFilteredRoadworks(roadworks);
    }
  };

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
  const formatDate = (startTime, endTime): string => {
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
        return `${startDate.format('dddd D MMMM YYYY')} at ${formatTime(startDate)} to ${endDate.format(
          'dddd D MMMM YYYY'
        )} at ${formatTime(endDate)}`;
      }
    }
  };

  return (
    <Styles.Container data-testid="RoadworksList">
      <Heading level={2} text={title} />
      <Styles.Label htmlFor="roadworksSearch">Search roadworks</Styles.Label>
      <Input
        id="roadworksSearch"
        name="roadworksSearch"
        type="text"
        placeholder="Enter a search term"
        maxLength={255}
        onChange={handleSearch}
        isFullWidth
      />
      <Styles.RoadworkList>
        {filteredRoadworks.map((roadwork, index) => {
          const startDate = new Date(roadwork.startTime);
          const endDate = new Date(roadwork.endTime);
          return (
            <Styles.Roadwork key={index}>
              <Styles.IconContainer>
                <DynamicIcon icon="mappin" />
                <Styles.IconText>
                  <Heading text={roadwork.detailedLocation} level={3} />
                </Styles.IconText>
              </Styles.IconContainer>
              <Styles.IconContainer>
                <DynamicIcon icon="events" />
                <Styles.IconText>
                  <span>{formatDate(startDate, endDate)}</span>
                </Styles.IconText>
              </Styles.IconContainer>
              <Styles.IconContainer>
                <DynamicIcon icon="roadworks" />
                <Styles.IconText>
                  <span>{roadwork.description}</span>
                </Styles.IconText>
              </Styles.IconContainer>
              <Styles.IconContainer>
                <DynamicIcon icon="bollard" />
                <Styles.IconText>
                  <span>{roadwork.trafficManagement}</span>
                </Styles.IconText>
              </Styles.IconContainer>
            </Styles.Roadwork>
          );
        })}
      </Styles.RoadworkList>
      {roadworks.length > 0 && filteredRoadworks.length === 0 && (
        <Styles.NoMatches>
          We couldn't find any results for your search term. Please try a different search.
        </Styles.NoMatches>
      )}
      {roadworks.length == 0 && (
        <Styles.NoMatches>
          Sorry, we're not able to find any results at the moment. Please try again later.
        </Styles.NoMatches>
      )}
    </Styles.Container>
  );
};

export default RoadworksList;
