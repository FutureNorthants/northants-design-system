
import React from "react";

import { PageSidebarProps } from "./PageSidebar.types";
import * as Styles from "./PageSidebar.styles";

/**
 * A container for holding the main content of a page
 */
const PageSidebar: React.FC<PageSidebarProps> = ({
  children,
}) => (
  <Styles.Container
    className="sidebar"
  >
    {children}
  </Styles.Container>
);

export default PageSidebar;

