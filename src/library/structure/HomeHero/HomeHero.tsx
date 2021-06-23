
import React, {useEffect, useState} from "react";
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';

import { HomeHeroProps } from "./HomeHero.types";
import * as Styles from "./HomeHero.styles";
import GDSLogo from "../../components/logos/GDSLogo/logo";
import NorthColoured from "../../components/logos/NorthColouredLogo/logo";
import WestColoured from "../../components/logos/WestColouredLogo/logo";
import { SkipToMainContent } from "../PageStructures";
import LazyImage from "react-lazy-progressive-image";
import Searchbar from "../Searchbar/Searchbar";
import PhaseBanner from "../PhaseBanner/PhaseBanner";
import PromotedLinks from "../../components/PromotedLinks/PromotedLinks";

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
  const [random, setRandom] = useState(999);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * imagesArray.length));
  }, []);  

  return(
    <>
      <SkipToMainContent />
      {/* <PhaseBanner isHome /> */}
      <Styles.Wrapper>
        <LazyImage
            src={random !== 999 && imagesArray[random].image1440x810}
            placeholder={random !== 999 && imagesArray[random].image144x81}
            visibilitySensorProps={{
                partialVisibility: true
            }}
        >
          {src => 
            <Styles.Container className={random !== 999 ? "loaded" : "loading"} image={src} title={random !== 999 && imagesArray[random].imageAltText ? imagesArray[random].imageAltText : ""}>
              <Styles.StyledMaxWidthContainer>
                <Styles.MainBox>
                  {topline &&
                    <Styles.Topline>{topline}</Styles.Topline>
                  }
                  <Styles.HiddenH1>{themeContext.full_name} Council</Styles.HiddenH1>
                  <Styles.LogoColoured className={themeContext.theme_vars.theme_name === "Memorial theme North" || themeContext.theme_vars.theme_name === "Memorial theme West" ? "black_logo" : ""}>
                    {themeContext.cardinal_name === "north" ? <NorthColoured /> : (themeContext.cardinal_name === "west" ? <WestColoured /> : <GDSLogo />)}
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
                  <PromotedLinks promotedLinksArray={promotedLinksArray}/>
                 }
              </Styles.StyledMaxWidthContainer>
            </Styles.Container>
          }
        </LazyImage>
      </Styles.Wrapper>
    </>
)};

export default HomeHero;

