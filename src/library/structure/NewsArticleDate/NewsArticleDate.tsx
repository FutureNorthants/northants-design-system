
import React from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';


import { NewsArticleDateProps } from "./NewsArticleDate.types";
import * as Styles from "./NewsArticleDate.styles";

dayjs.extend(customParseFormat);
/**
 * Form element - hint text
 */
const NewsArticleDate: React.FC<NewsArticleDateProps> = ({
    text, format
  }) => {

    if(format !== undefined) {
      text = dayjs(text, format).format('DD MMMM YYYY')
    }

    return (
      <Styles.NewsArticleDate>
          {text}
      </Styles.NewsArticleDate>
    );
  };
  

export default NewsArticleDate;

