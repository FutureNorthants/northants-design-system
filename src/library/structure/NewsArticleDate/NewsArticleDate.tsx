
import React from "react";

import { NewsArticleDateProps } from "./NewsArticleDate.types";
import * as Styles from "./NewsArticleDate.styles";

/**
 * Form element - hint text
 */
const NewsArticleDate: React.FC<NewsArticleDateProps> = ({
    text
  }) => {
    return (
      <Styles.NewsArticleDate>
        {text}
      </Styles.NewsArticleDate>
    );
  };
  

export default NewsArticleDate;

