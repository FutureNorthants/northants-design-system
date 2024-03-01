import React from 'react';
import { NewsArticleImageProps } from './NewsArticleImage.types';
import * as Styles from './NewsArticleImage.styles';
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';

/**
 * An image for a news article
 */
const NewsArticleImage: React.FunctionComponent<NewsArticleImageProps> = ({
  image1440x810,
  image144x81,
  imageAltText,
  imageCaption,
}) => {
  return (
    <Styles.ImageContainer>
      <ResponsiveImage
        imageSmall={image144x81}
        imageLarge={image1440x810}
        imageAltText={imageAltText ?? ''}
        smallWidth="144"
        largeWidth="1440"
        ratio="16by9"
        objectFit="contain"
      />
      {imageCaption && <Styles.Small itemprop="copyrightHolder">{imageCaption}</Styles.Small>}
    </Styles.ImageContainer>
  );
};

export default NewsArticleImage;
