
import React from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HomeHeroProps } from "./HomeHero.types";
import * as Styles from "./HomeHero.styles";
import GDSColoured from "./assets/gds_coloured";
import NorthColoured from "./assets/north_coloured";
import WestColoured from "./assets/west_coloured";
import { SkipToMainContent } from "../PageStructures";
import LazyImage from "react-lazy-progressive-image";
import Searchbar from "../Searchbar/Searchbar";
import { linkTo } from "@storybook/addon-links";

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
    
      <LazyImage
          src={imagesArray[random].image1440x810}
          placeholder={imagesArray[random].image144x81}
          visibilitySensorProps={{
              partialVisibility: true
          }}
      >
        {src => 
          <Styles.Container image={src}>
            <Styles.StyledMaxWidthContainer>
              <Styles.MainBox>
                {topline &&
                  <Styles.Topline>{topline}</Styles.Topline>
                }
                <Styles.HiddenH1>{themeContext.full_name} Council</Styles.HiddenH1>
                <Styles.LogoColoured>
                  {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSColoured />)}
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

