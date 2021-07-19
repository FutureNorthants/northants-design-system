
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";
import GDSLogo from "../../components/logos/GDSLogo/logo";
import NorthColoured from "../../components/logos/NorthColouredLogo/logo";
import WestColoured from "../../components/logos/WestColouredLogo/logo";
import WestWhite from "../../components/logos/WestWhiteLogo/logo";
import Searchbar from "../Searchbar/Searchbar";

/**
 * The header that should appear at the top of every page.
 */
const Header: React.FC<HeaderProps> = ({
  children,
  hideSearchBar = false,
  homeLink = "/",
  allServicesLink = "/",
  ...props
}) => {
  const themeContext = useContext(ThemeContext);
  const isHomepage = false;

  return(
    <>
      <Styles.Container
        isHomepage={isHomepage ? "true" : "false"}
        {...props}
      >
        <Styles.StyledMaxWidthContainer noBackground>
          <Styles.LogoWrapper>
            <Styles.HomeLink href={homeLink} title="Home" id="logo">
              {isHomepage ? 
                <Styles.LogoColoured className={themeContext.theme_vars.theme_name === "Memorial theme North" || themeContext.theme_vars.theme_name === "Memorial theme West" ? "black_logo" : ""}>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSLogo />)}
                </Styles.LogoColoured>   
                :
                <Styles.LogoWhite className={themeContext.theme_vars.theme_name === "Memorial theme North" ? "black_logo" : ""}>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestWhite /> : <GDSLogo />)}
                </Styles.LogoWhite>
              }
            </Styles.HomeLink>
          </Styles.LogoWrapper>
          {allServicesLink &&
            <Styles.AllServicesLink href={isHomepage ? "#all-services" : allServicesLink + "#all-services"} title="See all services" isHomepage={isHomepage ? "true" : "false"}>
              All services
            </Styles.AllServicesLink>
          }
          {!hideSearchBar &&
            <Styles.SearchWrapper>
                <Searchbar 
                  isLight={themeContext.cardinal_name === "north" ? true : false} 
                  submitInfo={[{
                    postTo: "/search",
                    params: {
                        type: "search"
                    }
                  }]}
                />
            </Styles.SearchWrapper>
          }

        </Styles.StyledMaxWidthContainer>
      </Styles.Container>
    </>
)};

export default Header;

