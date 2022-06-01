import React from 'react';
import { ImageProps } from './Image.types';
import * as Styles from './Image.styles';
import LazyImage from 'react-lazy-progressive-image';

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
  wrapText = false,
}) => (
  <Styles.Container data-testid="Image" wrapText={wrapText}>
    <Styles.ImageContainer data-testid="ImageContainer" ratio={ratio}>
      <LazyImage
        placeholder={imageSmall}
        src={imageLarge}
        visibilitySensorProps={{
          partialVisibility: true,
        }}
      >
        {(src) => <Styles.Image src={src} alt={imageAltText} />}
      </LazyImage>
    </Styles.ImageContainer>
    {caption?.trim() && <Styles.Caption>{caption}</Styles.Caption>}
  </Styles.Container>
);

export default Image;
