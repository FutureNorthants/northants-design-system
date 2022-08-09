import React from 'react';

import { PageMainProps } from './PageMain.types';
import * as Styles from './PageMain.styles';

/**
 * A container for holding the main content of a page
 */
const PageMain: React.FunctionComponent<PageMainProps> = ({ children, classes, fullWidthText = false, ...props }) => (
  <Styles.Container id="main" className={classes} fullWidthText={fullWidthText} {...props} data-testid="PageMain">
    {children}
  </Styles.Container>
);

export default PageMain;
