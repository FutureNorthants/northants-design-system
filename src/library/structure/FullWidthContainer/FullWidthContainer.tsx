import React from 'react';
import { FullWidthContainerProps } from './FullWidthContainer.types';
import * as Styles from './FullWidthContainer.styles.js';

/**
 * A Full Width Container with optional padding and background
 */
const FullWidthContainer: React.FunctionComponent<FullWidthContainerProps> = ({
  children,
  hasBackground = false,
  hasPadding = false,
}) => (
  <Styles.Container hasBackground={hasBackground} hasPadding={hasPadding} data-testid="FullWidthContainer">
    {children}
  </Styles.Container>
);

export default FullWidthContainer;
