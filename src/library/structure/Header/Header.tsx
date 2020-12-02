// Generated with util/create-component.js
import React from "react";
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
  homeLink = "/",
  allServicesLink = "/",
  ...props
}) => {
  const themeContext = useContext(ThemeContext);

  return(
    <Styles.Container
      isHomepage={isHomepage ? "true" : "false"}

      {...props}
    >
      <Styles.StyledMaxWidthContainer>
        <Styles.HomeLink href={homeLink} title="Go to the homepage" id="logo">
          {isHomepage ? 
            <Styles.LogoColoured>
              {themeContext.theme_vars.name === "North Northants theme" ? <NorthColoured alt="North Northamptonshire Council" /> : (themeContext.theme_vars.name === "West Northants theme" ? <WestColoured alt="West Northamptonshire Council" /> : <GDSColoured alt="Example Council" />)}
            </Styles.LogoColoured>   
            :
            <Styles.LogoWhite>
              {themeContext.theme_vars.name === "North Northants theme" ? <NorthWhite alt="North Northamptonshire Council" /> : (themeContext.theme_vars.name === "West Northants theme" ? <WestWhite alt="West Northamptonshire Council" /> : <GDSWhite alt="Example Council" />)}
            </Styles.LogoWhite>
          }
        </Styles.HomeLink>
        {allServicesLink && 
          <Styles.AllServicesLink href={allServicesLink} title="See all services" id="all-services">
            All services
          </Styles.AllServicesLink>
        }
      </Styles.StyledMaxWidthContainer>
    </Styles.Container>
)};

export default Header;

