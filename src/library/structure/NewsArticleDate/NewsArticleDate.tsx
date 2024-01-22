import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { NewsArticleDateProps } from './NewsArticleDate.types';
import * as Styles from './NewsArticleDate.styles';
import DisplayDate from '../DisplayDate/DisplayDate';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

/**
 * The date of the news article
 */
const NewsArticleDate: React.FunctionComponent<NewsArticleDateProps> = ({ text, format = 'X' }) => {
  return (
    <Styles.NewsArticleDate>
      <DisplayDate text={text} format={format} />
    </Styles.NewsArticleDate>
  );
};

export default NewsArticleDate;
