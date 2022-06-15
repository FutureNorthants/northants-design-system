import React from 'react';
import { CardProps } from './Card.types';
import * as Styles from './Card.styles';
import Heading from '../Heading/Heading';
import sanitizeHtml from 'sanitize-html';

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
}) => {
  const showContent = content || header;
  return (
    <Styles.Container data-testid="Card">
      {imageLarge && imageSmall && (
        <>
          {footerLink ? (
            <Styles.ImageLink href={footerLink.url}>
              <Styles.Image
                src={imageLarge}
                alt={imageAltText}
                srcSet={`${imageSmall} 400w, ${imageLarge} 800w`}
                sizes="(max-width: 550px) 400px, 800px"
                loading="lazy"
              />
            </Styles.ImageLink>
          ) : (
            <Styles.Image
              src={imageLarge}
              alt={imageAltText}
              srcSet={`${imageSmall} 400w, ${imageLarge} 800w`}
              sizes="(max-width: 550px) 400px, 800px"
              loading="lazy"
            />
          )}
        </>
      )}
      {showContent && (
        <Styles.Content>
          {header && (
            <Styles.Header>
              <Heading text={header} level={3} />
            </Styles.Header>
          )}
          <div dangerouslySetInnerHTML={{ __html: sanitizeHtml(content) }} />
        </Styles.Content>
      )}
      {footerLink && (
        <Styles.Footer>
          <Styles.FooterLink href={footerLink.url}>{footerLink.title}</Styles.FooterLink>
        </Styles.Footer>
      )}
    </Styles.Container>
  );
};

export default Card;
