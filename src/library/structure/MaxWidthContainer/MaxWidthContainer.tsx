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
  noPadding = false,
  overflowVisible = false,
  ...props
}) => (
  <Styles.Container noBackground={noBackground} noPadding={noPadding}>
    <Styles.MaxWidth 
      className={classes}
      overflowVisible={overflowVisible}
      {...props}
    >
      {children}
    </Styles.MaxWidth>
  </Styles.Container>
);

export default MaxWidthContainer;
