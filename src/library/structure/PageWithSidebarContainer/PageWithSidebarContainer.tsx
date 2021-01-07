
import React from "react";

import { PageWithSidebarContainerProps } from "./PageWithSidebarContainer.types";
import * as Styles from "./PageWithSidebarContainer.styles";

/**
 * A container for holding the main content of a page
 */
const PageWithSidebarContainer: React.FC<PageWithSidebarContainerProps> = ({
  children,
}) => (
  <Styles.Container

  >
    {children}
  </Styles.Container>
);

export default PageWithSidebarContainer;

