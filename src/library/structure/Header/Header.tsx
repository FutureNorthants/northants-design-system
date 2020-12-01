// Generated with util/create-component.js
import React from "react";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";
import GDSWhite from "./assets/gds_white.jsx";
import NorthWhite from "./assets/north_white.jsx";
import WestWhite from "./assets/west_white.jsx";
import GDSColoured from "./assets/gds_coloured.jsx";
import NorthColoured from "./assets/north_coloured.jsx";
import WestColoured from "./assets/west_coloured.jsx";

/**
 * The header that should appear at the top of every page.
 */
const Header: React.FC<HeaderProps> = ({
  children,
  isHomepage = false,
  ...props
}) => {
  const themeContext = useContext(ThemeContext);

  return(
    <Styles.Container
      role="main" 
      id="main" 
      isHomepage={isHomepage ? "true" : "false"}
      {...props}
    >
      <MaxWidthContainer>
        {isHomepage ? 
          <Styles.LogoColoured>
            {themeContext.name === "North Northants theme" ? <NorthColoured /> : (themeContext.name === "West Northants theme" ? <WestColoured /> : <GDSColoured />)}
          </Styles.LogoColoured>   
          :
          <Styles.LogoWhite>
            {themeContext.name === "North Northants theme" ? <NorthWhite /> : (themeContext.name === "West Northants theme" ? <WestWhite /> : <GDSWhite />)}
          </Styles.LogoWhite>
        }
      </MaxWidthContainer>
    </Styles.Container>
)};

export default Header;

