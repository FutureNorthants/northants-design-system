import React, { useEffect, useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HomeHeroProps } from './HomeHero.types';
import * as Styles from './HomeHero.styles';
import GDSLogo from '../../components/logos/GDSLogo/logo';
import NorthColoured from '../../components/logos/NorthColouredLogo/logo';
import WestColoured from '../../components/logos/WestColouredLogo/logo';
import Searchbar from '../Searchbar/Searchbar';
import PromotedLinks from '../../components/PromotedLinks/PromotedLinks';
import Image from 'next/image';

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
        <Styles.Container
          className={random !== 999 ? 'loaded' : 'loading'}
          title={random !== 999 && imagesArray[random].imageAltText ? imagesArray[random].imageAltText : ''}
        >
          {random !== 999 && (
            <Image
              src={imagesArray[random].image1440x810}
              alt={imagesArray[random].imageAltText}
              fill
              placeholder="blur"
              blurDataURL={imagesArray[random].image144x81}
              style={{
                objectFit: 'cover',
              }}
            />
          )}

          <Styles.StyledMaxWidthContainer>
            <Styles.MainBox>
              {topline && <Styles.Topline>{topline}</Styles.Topline>}
              <Styles.HiddenH1>{`${themeContext.full_name} Council`}</Styles.HiddenH1>
              {imageOverrideLogo && !usingMemorialTheme && (
                <Styles.LogoOverride>
                  <Image
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
      </Styles.Wrapper>
    </>
  );
};

export default HomeHero;
