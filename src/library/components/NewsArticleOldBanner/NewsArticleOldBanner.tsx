
import React from "react";

import { NewsArticleOldBannerProps } from "./NewsArticleOldBanner.types";
import * as Styles from "./NewsArticleOldBanner.styles";

/**
 * Form element - hint text
 */
const NewsArticleOldBanner: React.FC<NewsArticleOldBannerProps> = ({
    
  }) => {
    return (
      <Styles.NewsArticleOldBanner>
        This article is more than <strong>1 year old</strong>
      </Styles.NewsArticleOldBanner>
    );
  };
  

export default NewsArticleOldBanner;

