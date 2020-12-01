// Generated with util/create-component.js
import React from "react";

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";

/**
 * A container for holding the main content of a page
 */
const Header: React.FC<HeaderProps> = ({
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
    this is the header
  </Styles.Container>
);

export default Header;

