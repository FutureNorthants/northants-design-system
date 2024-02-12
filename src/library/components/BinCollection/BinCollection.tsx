import React from 'react';
import { BinCollectionProps, CollectionTypes } from './BinCollection.types';
import * as Styles from './BinCollection.styles';
import Heading from '../Heading/Heading';
import Column from '../Column/Column';
import Row from '../Row/Row';
import HeadingWithIcon from '../HeadingWithIcon/HeadingWithIcon';

const BinCollection: React.FunctionComponent<BinCollectionProps> = ({ address, binCollections }) => {
  const collectionTypes: CollectionTypes = {
    garden: {
      title: 'Garden Waste',
      icon: 'bins',
      yes: ['leaves', 'grass'],
      no: ['plastic bags'],
    },
    food: {
      title: 'Food Caddy',
      icon: 'foodwaste',
      yes: ['leaves', 'grass'],
      no: ['liquids'],
    },
    waste: {
      title: 'Waste',
      icon: 'bins',
      yes: ['leaves', 'grass'],
      no: ['plastic'],
    },
    recycling: {
      title: 'Recycling',
      icon: 'bins',
      yes: ['plastic', 'cardboard', 'glass'],
      no: ['plastic bags'],
    },
    recycling_boxes: {
      title: 'Recycling Boxes',
      icon: 'bins',
      yes: ['leaves', 'grass'],
      no: ['plastic'],
    },
    sacks: {
      title: 'Sacks',
      icon: 'bins',
      yes: ['leaves', 'grass'],
      no: ['plastic'],
    },
  };

  return (
    <Styles.Container data-testid="BinCollection">
      <Heading text="Bin collections for:" level={3} />
      <p>{address}</p>
      <Row>
        {binCollections.map((binCollection) => {
          const collectionDay = new Date(binCollection.date);
          const collectionType = collectionTypes[binCollection.type];
          return (
            <Column small="full" medium="full" large="full">
              <Styles.CollectionType>
                <Styles.CollectionHeader>
                  <Styles.CollectionHeading>
                    <HeadingWithIcon level={3} text={collectionType.title} icon={collectionType.icon} />
                  </Styles.CollectionHeading>

                  <Styles.CollectionDate>
                    {collectionDay.toLocaleDateString('en-GB', {
                      weekday: 'long',
                      day: 'numeric',
                      month: 'short',
                      year: 'numeric',
                    })}
                  </Styles.CollectionDate>
                </Styles.CollectionHeader>
                <Row>
                  <Column small="full" medium="one-half" large="one-half">
                    <Styles.CollectionItems $hasBorder={true}>
                      <Heading text="Yes please" level={4} />
                      <ul>
                        {collectionType.yes.map((yesItem) => (
                          <li>{yesItem}</li>
                        ))}
                      </ul>
                    </Styles.CollectionItems>
                  </Column>
                  <Column small="full" medium="one-half" large="one-half">
                    <Styles.CollectionItems>
                      <Heading text="No thanks" level={4} />
                      <ul>
                        {collectionType.no.map((noItem) => (
                          <li>{noItem}</li>
                        ))}
                      </ul>
                    </Styles.CollectionItems>
                  </Column>
                </Row>
              </Styles.CollectionType>
            </Column>
          );
        })}
      </Row>
    </Styles.Container>
  );
};

export default BinCollection;
