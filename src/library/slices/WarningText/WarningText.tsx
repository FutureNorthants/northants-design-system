import React from 'react';
import parse from 'html-react-parser';
import { WarningTextProps } from './WarningText.types';
import * as Styles from './WarningText.styles';

// @TODO this needs to fit within the content border

/**
 * Display text as a highlight or warning with a title
 */
const WarningText: React.FC<WarningTextProps> = ({ title, isWarning = false, children }) => (
  <Styles.WarningText isWarning={isWarning} data-testid="WarningText">
    <Styles.Title isWarning={isWarning}>{title}</Styles.Title>
    <Styles.Content>{children}</Styles.Content>
  </Styles.WarningText>
);

export default WarningText;
