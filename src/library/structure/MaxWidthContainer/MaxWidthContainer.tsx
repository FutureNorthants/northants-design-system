import React from "react";

import { MaxWidthContainerProps } from "./MaxWidthContainer.types";
import * as Styles from "./MaxWidthContainer.styles";

/**
 * A container for holding the main content of a page
 */
const MaxWidthContainer: React.FC<MaxWidthContainerProps> = ({
  children,
  classes,
  noBackground = false,
  ...props
}) => (
  <Styles.Container noBackground={noBackground}>
    <Styles.MaxWidth 
      className={classes}
      {...props}
    >
      {children}
    </Styles.MaxWidth>
  </Styles.Container>
);

export default MaxWidthContainer;

