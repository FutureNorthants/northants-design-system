import React from 'react';
import LazyImage from 'react-lazy-progressive-image';
import { PromoBannerProps } from './PromoBanner.types';
import * as Styles from './PromoBanner.styles';
import Heading from '../../components/Heading/Heading';

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
    <LazyImage
      src={image1440x810}
      placeholder={image144x81}
      visibilitySensorProps={{
        partialVisibility: true,
      }}
    >
      {(src) => <Styles.ImageLink $img={src} href={ctaUrl} title={ctaText} />}
    </LazyImage>
    <Styles.Wrapper>
      <Heading text={title} />
      <Styles.Content>{children}</Styles.Content>
      <Styles.CTA href={ctaUrl}>{ctaText}</Styles.CTA>
    </Styles.Wrapper>
  </Styles.Container>
);

export default PromoBanner;
