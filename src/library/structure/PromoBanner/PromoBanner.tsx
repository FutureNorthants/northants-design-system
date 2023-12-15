import React from 'react';
import { PromoBannerProps } from './PromoBanner.types';
import * as Styles from './PromoBanner.styles';
import Heading from '../../components/Heading/Heading';
import Image from 'next/image';
import Row from '../../components/Row/Row';
import Column from '../../components/Column/Column';

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
    <Row>
      <Column small="full" medium="one-half" large="one-half" hasPadding={false}>
        <Styles.ImageLink href={ctaUrl} title={ctaText}>
          <Image
            src={image1440x810}
            alt={ctaText}
            fill
            placeholder="blur"
            blurDataURL={image144x81}
            style={{
              objectFit: 'cover',
            }}
          />
        </Styles.ImageLink>
      </Column>
      <Column small="full" medium="one-half" large="one-half" hasPadding={false}>
        <Styles.Wrapper>
          <Heading text={title} />
          <Styles.Content>{children}</Styles.Content>
          <Styles.CTA href={ctaUrl}>{ctaText}</Styles.CTA>
        </Styles.Wrapper>
      </Column>
    </Row>
  </Styles.Container>
);

export default PromoBanner;
