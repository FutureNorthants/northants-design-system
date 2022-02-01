import React from 'react';
import { ImageProps } from './Image.types';
import * as Styles from './Image.styles';
import LazyImage from 'react-lazy-progressive-image';

const Image: React.FunctionComponent<ImageProps> = ({
  imageSmall,
  imageLarge,
  imageAltText,
  ratio = '4by3',
  caption,
}) => (
  <Styles.Container data-testid="Image">
    <Styles.ImageContainer ratio={ratio}>
      <LazyImage placeholder={imageSmall} src={imageLarge}>
        {(src) => <Styles.Image src={src} alt={imageAltText} />}
      </LazyImage>
    </Styles.ImageContainer>
    {caption?.trim() && <Styles.Caption>{caption}</Styles.Caption>}
  </Styles.Container>
);

export default Image;
