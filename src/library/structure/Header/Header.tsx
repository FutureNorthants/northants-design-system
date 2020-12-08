
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";
import GDSWhite from "./assets/gds_white";
import NorthWhite from "./assets/north_white";
import WestWhite from "./assets/west_white";
import GDSColoured from "./assets/gds_coloured";
import NorthColoured from "./assets/north_coloured";
import WestColoured from "./assets/west_coloured";

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
        {/* TODO: add skip to main content button */}
        <Styles.HomeLink href={homeLink} title="Go to the homepage" id="logo">
          {isHomepage ? 
            <Styles.LogoColoured>
              {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSColoured />)}
            </Styles.LogoColoured>   
            :
            <Styles.LogoWhite>
              {themeContext.cardinal_name === "north" ? <NorthWhite /> : (themeContext.cardinal_name === "west" ? <WestWhite /> : <GDSWhite />)}
            </Styles.LogoWhite>
          }
        </Styles.HomeLink>
        {allServicesLink && !isHomepage &&
          <Styles.AllServicesLink href={allServicesLink} title="See all services" id="all-services" isHomepage={isHomepage ? "true" : "false"}>
            All services
          </Styles.AllServicesLink>
        }
      </Styles.StyledMaxWidthContainer>
    </Styles.Container>
)};

export default Header;
