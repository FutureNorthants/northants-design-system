import React from 'react';
import { ImageProps } from './Image.types';
import * as Styles from './Image.styles';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

/**
 * Responsive image slice component that allows 4 by 3 or 16 by 9 images
 * with an optional caption.
 */
const Image: React.FunctionComponent<ImageProps> = ({
  imageSmall,
  imageLarge,
  imageAltText,
  ratio = '4by3',
  caption,
  wrapText,
}) => (
  <Styles.Container data-testid="Image" $wrapText={wrapText}>
    <ResponsiveImage
      imageSmall={imageSmall}
      imageLarge={imageLarge}
      imageAltText={imageAltText}
      ratio={ratio}
      smallWidth="400"
      largeWidth="1200"
    />
    {caption?.trim() && <Styles.Caption>{caption}</Styles.Caption>}
  </Styles.Container>
);

export default Image;
