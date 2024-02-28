import React from 'react';

import { ResponsiveImageProps } from './ResponsiveImage.types';
import * as Styles from './ResponsiveImage.styles';

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  imageSmall,
  imageLarge,
  imageAltText,
  smallWidth = '400',
  largeWidth = '1200',
  ratio,
  objectFit = 'cover',
}) => (
  <Styles.Container data-testid="ResponsiveImage" $ratio={ratio}>
    <Styles.Image
      alt={imageAltText}
      loading="lazy"
      srcSet={`${imageSmall} ${smallWidth}w, ${imageLarge} ${largeWidth}w`}
      sizes={`(max-width: 550px) 550px, ${largeWidth}px`}
      src={imageLarge}
      $objectFit={objectFit}
    />
  </Styles.Container>
);

export default ResponsiveImage;
