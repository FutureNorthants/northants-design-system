import React from 'react';
import { CardsProps } from './Cards.types';
import * as Styles from './Cards.styles';
import Row from '../../components/Row/Row';
import Card from '../../components/Card/Card';
import Column from '../../components/Column/Column';

/**
 * Multiple cards in a responsive grid
 */
const Cards: React.FunctionComponent<CardsProps> = ({ cards }) => (
  <Styles.Container data-testid="Cards">
    <Row>
      {cards.map((card, index) => (
        <Column small="full" medium="one-half" large="one-third" key={index}>
          <Card {...card} />
        </Column>
      ))}
    </Row>
  </Styles.Container>
);

export default Cards;
