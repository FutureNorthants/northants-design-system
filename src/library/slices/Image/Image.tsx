import React from 'react';
import { ImageProps } from './Image.types';
import * as Styles from './Image.styles';
import Image from 'next/image';

/**
 * Responsive image slice component that allows 4 by 3 or 16 by 9 images
 * with an optional caption.
 */
const ImageSlice: React.FunctionComponent<ImageProps> = ({
  imageSmall,
  imageLarge,
  imageAltText,
  ratio = '4by3',
  caption,
  wrapText,
}) => (
  <Styles.Container data-testid="Image" $wrapText={wrapText}>
    <Styles.ImageContainer data-testid="ImageContainer" $ratio={ratio}>
      <Image src={imageLarge} alt={imageAltText} fill loading="lazy" placeholder="blur" blurDataURL={imageSmall} />
    </Styles.ImageContainer>
    {caption?.trim() && <Styles.Caption>{caption}</Styles.Caption>}
  </Styles.Container>
);

export default ImageSlice;
