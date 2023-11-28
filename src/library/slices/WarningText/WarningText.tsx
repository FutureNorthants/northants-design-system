import React from 'react';
import { WarningTextProps } from './WarningText.types';
import * as Styles from './WarningText.styles';

/**
 * Display text as a highlight or warning with a title
 */
const WarningText: React.FunctionComponent<WarningTextProps> = ({ title, isWarning = false, children }) => (
  <Styles.WarningText $isWarning={isWarning} data-testid="WarningText">
    <Styles.Title $isWarning={isWarning}>{title}</Styles.Title>
    <Styles.Content>{children}</Styles.Content>
  </Styles.WarningText>
);

export default WarningText;
