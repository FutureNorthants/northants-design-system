import React from 'react';
import dayjs from 'dayjs';
import customParseFormat from 'dayjs/plugin/customParseFormat';
import advancedFormat from 'dayjs/plugin/advancedFormat';
import { DisplayDateProps } from './DisplayDate.types';
import * as Styles from './DisplayDate.styles';

dayjs.extend(customParseFormat);
dayjs.extend(advancedFormat);

/**
 * Display the date
 */
const DisplayDate: React.FunctionComponent<DisplayDateProps> = ({
  text,
  format = 'X',
  preText = '',
  postText = '',
}) => {
  if (format === 'X') {
    text = dayjs.unix(parseInt(text)).format('DD MMMM YYYY');
  } else {
    text = dayjs(text, format).format('DD MMMM YYYY');
  }

  return (
    <Styles.DisplayDate>
      {preText}
      {text}
      {postText}
    </Styles.DisplayDate>
  );
};

export default DisplayDate;
