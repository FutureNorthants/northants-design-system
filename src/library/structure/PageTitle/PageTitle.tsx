
import React from "react";

import { PageTitleProps } from "./PageTitle.types";
import * as Styles from "./PageTitle.styles";

/**
 * A container for holding the main content of a page
 */
const PageTitle: React.FC<PageTitleProps> = ({
  children,
  classes,
  ...props
}) => (
  <Styles.Container
    data-testid="title" 
    className={classes}
    {...props}
  >
    {children}
  </Styles.Container>
);

export default PageTitle;

