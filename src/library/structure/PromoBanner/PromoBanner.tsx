import React from 'react';
import { PromoBannerProps } from './PromoBanner.types';
import * as Styles from './PromoBanner.styles';
import Heading from '../../components/Heading/Heading';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

/**
 * Promotional banner used as the first wide line in a promotional block,
 * incorporated within PromoBlock use.
 */
const PromoBanner: React.FunctionComponent<PromoBannerProps> = ({
  title,
  image1440x810,
  image144x81,
  ctaText,
  ctaUrl,
  children,
}) => (
  <Styles.Container>
    <Styles.ImageLink href={ctaUrl} title={ctaText}>
      <ResponsiveImage
        imageSmall={image144x81}
        imageLarge={image1440x810}
        imageAltText={ctaText}
        smallWidth="144"
        largeWidth="1440"
        ratio="16by9"
        objectFit="cover"
      />
    </Styles.ImageLink>

    <Styles.Wrapper>
      <Heading text={title} />
      <Styles.Content>{children}</Styles.Content>
      <Styles.CTA href={ctaUrl}>{ctaText}</Styles.CTA>
    </Styles.Wrapper>
  </Styles.Container>
);

export default PromoBanner;
