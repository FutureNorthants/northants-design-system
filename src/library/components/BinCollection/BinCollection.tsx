import React from 'react';
import { BinCollectionProps, CollectionTypes } from './BinCollection.types';
import * as Styles from './BinCollection.styles';
import Heading from '../Heading/Heading';
import Column from '../Column/Column';
import Row from '../Row/Row';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';
import FileDownload from '../FileDownload/FileDownload';

const BinCollection: React.FunctionComponent<BinCollectionProps> = ({
  address,
  binCollections,
  calendar,
  calendarSize,
}) => {
  const collectionTypes: CollectionTypes = {
    garden: {
      title: 'Garden Waste',
      icon: 'gardenwaste',
    },
    food: {
      title: 'Food Caddy',
      icon: 'foodcaddy',
    },
    waste: {
      title: 'Waste',
      icon: 'wastebin',
    },
    recycling: {
      title: 'Recycling',
      icon: 'bins',
    },
    recycling_boxes: {
      title: 'Recycling Boxes',
      icon: 'recyclingbox',
    },
    refuse: {
      title: 'Waste',
      icon: 'wastebin',
    },
    sacks: {
      title: 'Sacks',
      icon: 'wastesack',
    },
  };

  const formatDate = (collectionDay: Date) => {
    return collectionDay
      .toLocaleDateString('en-GB', {
        weekday: 'long',
        day: 'numeric',
        month: 'long',
        year: 'numeric',
      })
      .replace(',', '');
  };

  const binCollectionsGrouped = binCollections.reduce((acc, binCollection) => {
    const collectionDay = binCollection.date;
    if (!acc[collectionDay]) {
      acc[collectionDay] = [];
    }

    // Only add bin collections with known types
    if (collectionTypes.hasOwnProperty(binCollection.type)) {
      acc[collectionDay].push(binCollection);
    }

    return acc;
  }, {});

  return (
    <Styles.Container data-testid="BinCollection">
      <Heading text="Bin collections for:" level={3} />
      <p>{address}</p>

      {Object.keys(binCollectionsGrouped).map((day) => {
        // Only show days with bin collections
        if (binCollectionsGrouped[day].length > 0) {
          const collectionDay = new Date(day);
          return (
            <Styles.DayWrapper key={day}>
              <Row>
                <Column small="full" medium="full" large="full">
                  <Styles.CollectionHeader>
                    <Styles.CollectionDay>{formatDate(collectionDay)}</Styles.CollectionDay>
                  </Styles.CollectionHeader>
                </Column>
                {binCollectionsGrouped[day]
                  .sort((a, b) => a.type.localeCompare(b.type))
                  .map((binCollection, index) => {
                    const collectionType = collectionTypes[binCollection.type];
                    return (
                      <Column small="full" medium="full" large="full" key={index}>
                        <Styles.CollectionType>
                          <HeadingWithIcon level={3} text={collectionType.title} icon={collectionType.icon} />
                        </Styles.CollectionType>
                      </Column>
                    );
                  })}
              </Row>
            </Styles.DayWrapper>
          );
        }
      })}

      {calendar && (
        <FileDownload
          title="Bin collection calendar"
          url={calendar}
          type="PDF"
          size={calendarSize ?? ''}
          archived={false}
        />
      )}
    </Styles.Container>
  );
};

export default BinCollection;
