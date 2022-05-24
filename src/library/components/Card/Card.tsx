import React from 'react';
import { CardProps } from './Card.types';
import * as Styles from './Card.styles';
import Heading from '../Heading/Heading';

/**
 * A card component with header, footer and content
 */
const Card: React.FunctionComponent<CardProps> = ({ header, content, footer }) => (
  <Styles.Container data-testid="Card">
    {header && (
      <Styles.Header>
        <Heading text={header} level={3} />
      </Styles.Header>
    )}
    {content}
    {footer && (
      <Styles.Footer>
        <Styles.FooterLink href={footer.url}>{footer.text}</Styles.FooterLink>
      </Styles.Footer>
    )}
  </Styles.Container>
);

export default Card;
