
import React from "react";

import { NewsArticleDateProps } from "./NewsArticleDate.types";
import * as Styles from "./NewsArticleDate.styles";

/**
 * Form element - hint text
 */
const NewsArticleDate: React.FC<NewsArticleDateProps> = ({
    text,
    withMargin
  }) => {
    return (
      <Styles.NewsArticleDate withMargin={withMargin}>
        {text}
      </Styles.NewsArticleDate>
    );
  };
  

export default NewsArticleDate;

