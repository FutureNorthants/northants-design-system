import React from 'react';
import { NewsArticleOldBannerProps } from './NewsArticleOldBanner.types';
import * as Styles from './NewsArticleOldBanner.styles';

/**
 * Displayed when a news article is older than 1 year
 */
const NewsArticleOldBanner: React.FunctionComponent<NewsArticleOldBannerProps> = ({}) => {
  return (
    <Styles.NewsArticleOldBanner>
      This article is more than <strong>1 year old</strong>
    </Styles.NewsArticleOldBanner>
  );
};

export default NewsArticleOldBanner;
