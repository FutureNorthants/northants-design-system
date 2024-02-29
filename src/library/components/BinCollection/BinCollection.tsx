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
    sacks: {
      title: 'Sacks',
      icon: 'wastesack',
    },
  };

  const now = new Date();

  return (
    <Styles.Container data-testid="BinCollection">
      <Heading text="Bin collections for:" level={3} />
      <p>{address}</p>
      <Row>
        {binCollections.map((binCollection, index) => {
          const collectionDay = new Date(binCollection.date);
          const collectionType = collectionTypes[binCollection.type];
          const dueIn = Math.ceil((collectionDay.getTime() - now.getTime()) / (1000 * 3600 * 24));
          return (
            <Column small="full" medium="full" large="full" key={index}>
              <Styles.CollectionType>
                <Styles.CollectionHeader>
                  <HeadingWithIcon
                    level={3}
                    text={`${collectionType.title} (due in ${dueIn} days)`}
                    icon={collectionType.icon}
                    subHeading={collectionDay.toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  />
                </Styles.CollectionHeader>
              </Styles.CollectionType>
            </Column>
          );
        })}
      </Row>
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
