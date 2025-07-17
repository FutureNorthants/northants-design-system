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
import ResponsiveImage from '../../components/ResponsiveImage/ResponsiveImage';
import PromotedServicesTabs from '../PromotedServicesTabs/PromotedServicesTabs';
import PromotedServicesTabContent from '../PromotedServicesTabs/PromotedServicesTabContent';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';
import { GeneratedTheme } from '../../../themes/ThemeVars.types';

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
  showSearch = true,
  promotedServicesTabs,
}) => {
  const themeContext = useContext(ThemeContext) as GeneratedTheme;
  const [random, setRandom] = useState(999);
  const usingMemorialTheme =
    themeContext.theme_vars.theme_name === 'Memorial theme North' ||
    themeContext.theme_vars.theme_name === 'Memorial theme West';
  const [activeTab, setActiveTab] = useState<number>(0);

  useEffect(() => {
    setRandom(Math.floor(Math.random() * imagesArray.length));
  }, []);

  return (
    <Styles.Outer data-testid="HomeHero">
      <Styles.Wrapper as={showSearch ? 'header' : 'div'}>
        <Styles.Container className={random !== 999 ? 'loaded' : 'loading'} $showSearch={showSearch}>
          {random !== 999 && (
            <ResponsiveImage
              imageSmall={imagesArray[random].image144x81 ?? ''}
              imageLarge={imagesArray[random].image1440x810 ?? ''}
              imageAltText={imagesArray[random].imageAltText ?? ''}
              smallWidth="144"
              largeWidth="1440"
              ratio="auto"
              objectFit="cover"
            />
          )}

          <Styles.StyledMaxWidthContainer>
            {showSearch ? (
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
            ) : (
              <Styles.HiddenH1>{`${themeContext.full_name} Council`}</Styles.HiddenH1>
            )}
            {promotedLinksArray.length > 0 && (
              <PromotedLinks promotedLinksArray={promotedLinksArray} hasTabs={!showSearch} />
            )}
          </Styles.StyledMaxWidthContainer>
        </Styles.Container>
        {promotedServicesTabs && (
          <Styles.PromotedServicesTabContainer>
            <MaxWidthContainer noBackground>
              <PromotedServicesTabs {...promotedServicesTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
            </MaxWidthContainer>
          </Styles.PromotedServicesTabContainer>
        )}
      </Styles.Wrapper>
      {promotedServicesTabs && (
        <MaxWidthContainer noPadding>
          <PromotedServicesTabContent {...promotedServicesTabs} activeTab={activeTab} setActiveTab={setActiveTab} />
        </MaxWidthContainer>
      )}
    </Styles.Outer>
  );
};

export default HomeHero;
