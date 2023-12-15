import React from 'react';
import { NewsArticleImageProps } from './NewsArticleImage.types';
import * as Styles from './NewsArticleImage.styles';
import Image from 'next/image';

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
    <>
      <Styles.ImageContainer>
        <Image alt={imageAltText} src={image1440x810} fill={true} placeholder="blur" blurDataURL={image144x81} />
      </Styles.ImageContainer>
      {imageCaption && <Styles.Small itemprop="copyrightHolder">{imageCaption}</Styles.Small>}
    </>
  );
};

export default NewsArticleImage;
