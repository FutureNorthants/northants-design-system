
import React from "react";

import { PageMainProps } from "./PageMain.types";
import * as Styles from "./PageMain.styles";

/**
 * A container for holding the main content of a page
 */
const PageMain: React.FC<PageMainProps> = ({
  children,
  classes,
  ...props
}) => (
  <Styles.Container
    role="main" 
    id="main" 
    className={classes}
    {...props}
  >
    {children}
  </Styles.Container>
);

export default PageMain;

