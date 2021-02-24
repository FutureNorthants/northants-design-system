
import React from "react";
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';


import { NewsArticleDateProps } from "./NewsArticleDate.types";
import * as Styles from "./NewsArticleDate.styles";

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);
/**
 * Form element - hint text
 */
const NewsArticleDate: React.FC<NewsArticleDateProps> = ({
    text, format
  }) => {

    if(format !== undefined) {
      // if you send through entirely numbers it assumes timestamp
      let isEntirelyNumerical = new RegExp('^[0-9]+$');
      if(isEntirelyNumerical.test(text)) {
        text = dayjs.unix(parseInt(text)).format('DD MMMM YYYY')
      }
      else {
        text = dayjs(text, format).format('DD MMMM YYYY')
      }
    }

    return (
      <Styles.NewsArticleDate>
          {text}
      </Styles.NewsArticleDate>
    );
  };
  

export default NewsArticleDate;

