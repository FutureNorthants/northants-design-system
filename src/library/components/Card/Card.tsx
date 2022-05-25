import React from 'react';
import { CardProps } from './Card.types';
import * as Styles from './Card.styles';
import Heading from '../Heading/Heading';

/**
 * A card component with header, footer and content
 */
const Card: React.FunctionComponent<CardProps> = ({
  header,
  content,
  footerLink,
  imageLarge,
  imageSmall,
  imageAltText,
}) => (
  <Styles.Container data-testid="Card">
    {imageLarge && imageSmall && (
      <Styles.Image
        src={imageLarge}
        alt={imageAltText}
        srcSet={`${imageSmall} 400w, ${imageLarge} 800w`}
        sizes="(max-width: 550px) 400px, 800px"
        loading="lazy"
      />
    )}
    <Styles.Content>
      {header && (
        <Styles.Header>
          <Heading text={header} level={3} />
        </Styles.Header>
      )}
      {content}
      {footerLink && (
        <Styles.Footer>
          <Styles.FooterLink href={footerLink.url}>{footerLink.text}</Styles.FooterLink>
        </Styles.Footer>
      )}
    </Styles.Content>
  </Styles.Container>
);

export default Card;
