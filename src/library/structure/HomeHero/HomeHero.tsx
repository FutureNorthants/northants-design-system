import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HomeHeroProps } from './HomeHero.types';
import * as Styles from './HomeHero.styles';
import GDSLogo from '../../components/logos/GDSLogo/logo';
import NorthColoured from '../../components/logos/NorthColouredLogo/logo';
import WestColoured from '../../components/logos/WestColouredLogo/logo';
import LazyImage from 'react-lazy-progressive-image';
import Searchbar from '../Searchbar/Searchbar';
import PromotedLinks from '../../components/PromotedLinks/PromotedLinks';

/**
 * The Hero that should appear at the top of the home page.
 */
const HomeHero: React.FunctionComponent<HomeHeroProps> = ({
  topline,
  strapline,
  imagesArray,
  promotedLinksArray,
  searchSuggestions = [],
  imageOverrideLogo,
  imageOverrideLogoAltText,
}) => {
  const themeContext = useContext(ThemeContext);
  const [random, setRandom] = useState(999);
  const usingMemorialTheme =
    themeContext.theme_vars.theme_name === 'Memorial theme North' ||
    themeContext.theme_vars.theme_name === 'Memorial theme West';

  useEffect(() => {
    setRandom(Math.floor(Math.random() * imagesArray.length));
  }, []);

  return (
    <>
      <Styles.Wrapper>
        <LazyImage
          src={random !== 999 && imagesArray[random].image1440x810 ? imagesArray[random].image1440x810 : ''}
          placeholder={random !== 999 && imagesArray[random].image144x81 ? imagesArray[random].image144x81 : ''}
          visibilitySensorProps={{
            partialVisibility: true,
          }}
        >
          {(src) => (
            <Styles.Container
              className={random !== 999 ? 'loaded' : 'loading'}
              image={src}
              title={random !== 999 && imagesArray[random].imageAltText ? imagesArray[random].imageAltText : ''}
            >
              <Styles.StyledMaxWidthContainer>
                <Styles.MainBox>
                  {topline && <Styles.Topline>{topline}</Styles.Topline>}
                  <Styles.HiddenH1>{`${themeContext.full_name} Council`}</Styles.HiddenH1>
                  {imageOverrideLogo && !usingMemorialTheme && (
                    <Styles.LogoOverride>
                      <img
                        src={imageOverrideLogo}
                        width="520"
                        height="150"
                        alt={imageOverrideLogoAltText?.trim() ? imageOverrideLogoAltText : 'Logo'}
                      />
                    </Styles.LogoOverride>
                  )}
                  {(!imageOverrideLogo || usingMemorialTheme) && (
                    <Styles.LogoColoured className={usingMemorialTheme ? 'black_logo' : ''}>
                      {themeContext.cardinal_name === 'north' ? (
                        <NorthColoured />
                      ) : themeContext.cardinal_name === 'west' ? (
                        <WestColoured />
                      ) : (
                        <GDSLogo />
                      )}
                    </Styles.LogoColoured>
                  )}
                  {strapline && <Styles.Strapline>{strapline}</Styles.Strapline>}
                  <Searchbar
                    isLight
                    isLarge
                    placeholder="Search the site"
                    submitInfo={{
                      postTo: '/search',
                      params: {
                        type: 'search',
                      },
                    }}
                    suggestions={searchSuggestions}
                    maximumMatchesShown={4}
                  />
                </Styles.MainBox>
                {promotedLinksArray.length > 0 && <PromotedLinks promotedLinksArray={promotedLinksArray} />}
              </Styles.StyledMaxWidthContainer>
            </Styles.Container>
          )}
        </LazyImage>
      </Styles.Wrapper>
    </>
  );
};

export default HomeHero;
