// Generated with util/create-component.js
import React from "react";

import { MaxWidthContainerProps } from "./MaxWidthContainer.types";
import * as Styles from "./MaxWidthContainer.styles";

/**
 * A container for holding the main content of a page
 */
const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  classes,
  ...props
}) => (
  <Styles.Container
    className={classes}
    data-testid="test-maxwidth"
    {...props}
  >
    {children}
  </Styles.Container>
);

export default MaxWidthContainer;

