
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HomeHeroProps } from "./HomeHero.types";
import * as Styles from "./HomeHero.styles";
import GDSWhite from "../../components/logos/GDSWhiteLogo/logo";
import NorthColoured from "../../components/logos/NorthColouredLogo/logo";
import WestColoured from "../../components/logos/WestColouredLogo/logo";
import { SkipToMainContent } from "../PageStructures";
import LazyImage from "react-lazy-progressive-image";
import Searchbar from "../Searchbar/Searchbar";
import PhaseBanner from "../PhaseBanner/PhaseBanner";

/**
 * The Hero that should appear at the top of the home page.
 */
const HomeHero: React.FC<HomeHeroProps> = ({
  topline,
  strapline,
  imagesArray,
  promotedLinksArray
}) => {
  const themeContext = useContext(ThemeContext);

  const random = (Math.floor(Math.random() * imagesArray.length));

  return(
    <>
      <SkipToMainContent />
      <PhaseBanner isHome />
      <LazyImage
          src={imagesArray[random].image1440x810}
          placeholder={imagesArray[random].image144x81}
          visibilitySensorProps={{
              partialVisibility: true
          }}
      >
        {src => 
          <Styles.Container image={src} aria-label={imagesArray[random].imageAltText ? imagesArray[random].imageAltText : ""}>
            <Styles.StyledMaxWidthContainer>
              <Styles.MainBox>
                {topline &&
                  <Styles.Topline>{topline}</Styles.Topline>
                }
                <Styles.HiddenH1>{themeContext.full_name} Council</Styles.HiddenH1>
                <Styles.LogoColoured>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSWhite />)}
                </Styles.LogoColoured>   
                {strapline && 
                  <Styles.Strapline>{strapline}</Styles.Strapline>
                }
                <Searchbar 
                  isLight
                  isLarge 
                  placeholder="Search the site"
                  submitInfo={[{
                    postTo: "/search",
                    params: {
                        type: "search"
                    }
                  }]}
                />
              </Styles.MainBox>
              {promotedLinksArray.length > 0 && 
                <Styles.PromotedLinks>
                  {promotedLinksArray.map((link) =>
                    <Styles.PromotedLink href={link.url} title={"Go to " + link.title}>
                      <span>{link.title}</span>
                    </Styles.PromotedLink>
                  )}
                </Styles.PromotedLinks>
              }
            </Styles.StyledMaxWidthContainer>
          </Styles.Container>
        }
      </LazyImage>
    </>
)};

export default HomeHero;

