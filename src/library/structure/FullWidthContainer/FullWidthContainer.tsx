import React from 'react';
import { FullWidthContainerProps } from './FullWidthContainer.types';
import * as Styles from './FullWidthContainer.styles.js';

/**
 * A Full Width Container
 */
const FullWidthContainer: React.FunctionComponent<FullWidthContainerProps> = ({
  children,
  noBackground = false,
  noPadding = false,
}) => (
  <Styles.Container noBackground={noBackground} noPadding={noPadding} data-testid="FullWidthContainer">
    {children}
  </Styles.Container>
);

export default FullWidthContainer;
