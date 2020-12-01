// Generated with util/create-component.js
import React from "react";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";

/**
 * The header that should appear at the top of every page.
 */
const Header: React.FC<HeaderProps> = ({
  children,
  isHomepage = false,
  ...props
}) => (
  <Styles.Container
    role="main" 
    id="main" 
    isHomepage={isHomepage ? "true" : "false"}
    {...props}
  >
    <MaxWidthContainer>
      {isHomepage ? 
        <Styles.LogoColoured />   
        :
        <Styles.LogoWhite />   
      }
    </MaxWidthContainer>
  </Styles.Container>
);

export default Header;

