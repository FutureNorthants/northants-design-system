
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HeaderProps } from "./Header.types";
import * as Styles from "./Header.styles";
import GDSWhite from "./assets/gds_white";
import WestWhite from "./assets/west_white";
import GDSColoured from "./assets/gds_coloured";
import NorthColoured from "./assets/north_coloured";
import WestColoured from "./assets/west_coloured";
import { SkipToMainContent } from "../PageStructures";
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
      <SkipToMainContent />
      <Styles.Container
        isHomepage={isHomepage ? "true" : "false"}
        {...props}
      >
        <Styles.StyledMaxWidthContainer noBackground>
          <Styles.LogoWrapper>
            <Styles.HomeLink href={homeLink} title="Go to the homepage" id="logo">
              {isHomepage ? 
                <Styles.LogoColoured>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSColoured />)}
                </Styles.LogoColoured>   
                :
                <Styles.LogoWhite>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestWhite /> : <GDSWhite />)}
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

