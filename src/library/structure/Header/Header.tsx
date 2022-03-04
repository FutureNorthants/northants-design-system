import React from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HeaderProps } from './Header.types';
import * as Styles from './Header.styles';
import GDSLogo from '../../components/logos/GDSLogo/logo';
import NorthColoured from '../../components/logos/NorthColouredLogo/logo';
import NorthWhite from '../../components/logos/NorthWhiteLogo/logo';
import WestWhite from '../../components/logos/WestWhiteLogo/logo';
import Searchbar from '../Searchbar/Searchbar';

/**
 * The header that should appear at the top of every page.
 */
const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  hideSearchBar = false,
  homeLink = '/',
  allServicesLink = '/',
  isHomepage = false,
  searchSuggestions = [],
  ...props
}) => {
  const themeContext = useContext(ThemeContext);

  /*
      north homepage - no header
      north subpage - white header / colour logo / has search

      west homepage - no header
      west subpage - blue header (action) / white logo / has search

      memorial north homepage - dark grey header / white logo / has search
      memorial west homepage  - dark grey header / white logo / has search
  */
  const themeLogos = (cardinal_name, is_memorial) => {
    if (is_memorial === true) {
      switch (cardinal_name) {
        case 'north':
          return (
            <Styles.LogoWhite>
              <NorthWhite />
            </Styles.LogoWhite>
          );
        case 'west':
          return (
            <Styles.LogoWhite>
              <WestWhite />
            </Styles.LogoWhite>
          );
        default:
          return (
            <Styles.LogoWhite>
              <GDSLogo />
            </Styles.LogoWhite>
          );
      }
    } else {
      switch (cardinal_name) {
        case 'north':
          return (
            <Styles.LogoColoured>
              <NorthColoured />
            </Styles.LogoColoured>
          );
        case 'west':
          return (
            <Styles.LogoWhite>
              <WestWhite />
            </Styles.LogoWhite>
          );
        default:
          return (
            <Styles.LogoColoured className="black_logo">
              <GDSLogo />
            </Styles.LogoColoured>
          );
      }
    }
  };

  return (
    <>
      <Styles.Container {...props} data-testid="Header">
        <Styles.StyledMaxWidthContainer noBackground>
          <Styles.LogoWrapper>
            <Styles.HomeLink href={homeLink} title="Home" id="logo">
              {themeLogos(themeContext.cardinal_name, themeContext.is_memorial)}
            </Styles.HomeLink>
          </Styles.LogoWrapper>
          {allServicesLink && (
            <Styles.AllServicesLink href={isHomepage ? '#all-services' : allServicesLink + '#all-services'}>
              All services
            </Styles.AllServicesLink>
          )}
          {!hideSearchBar && (
            <Styles.SearchWrapper>
              <Searchbar
                isLight={themeContext.cardinal_name === 'north' ? true : false}
                submitInfo={{
                  postTo: '/search',
                  params: {
                    type: 'search',
                  },
                }}
                suggestions={searchSuggestions}
              />
            </Styles.SearchWrapper>
          )}
        </Styles.StyledMaxWidthContainer>
      </Styles.Container>
    </>
  );
};

export default Header;
