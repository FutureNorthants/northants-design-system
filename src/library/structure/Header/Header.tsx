import React, { useState } from 'react';
import { useContext } from 'react';
import { ThemeContext } from 'styled-components';
import { HeaderProps } from './Header.types';
import * as Styles from './Header.styles';
import GDSLogo from '../../components/logos/GDSLogo/logo';
import NorthColoured from '../../components/logos/NorthColouredLogo/logo';
import Searchbar from '../Searchbar/Searchbar';
import { MaxWidthContainer } from '../PageStructures';
import WestColouredLogo from '../../components/logos/WestColouredLogo/logo';
import ChevronIcon from '../../components/icons/ChevronIcon/ChevronIcon';
import WestBlackLogo from '../../components/logos/WestBlackLogo/logo';
import NorthBlackLogo from '../../components/logos/NorthBlackLogo/logo';

/**
 * The header that should appear at the top of every page.
 */
const Header: React.FunctionComponent<HeaderProps> = ({
  children,
  hideSearchBar = false,
  homeLink = '/',
  hasNewsLink = false,
  hasDirectoryLink = false,
  accessibilityLink,
  allServicesLink = '/',
  isHomepage = false,
  searchSuggestions = [],
  ...props
}) => {
  const themeContext = useContext(ThemeContext);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  /*
      north homepage - no header
      north subpage - white search bar / white nav / colour logo / has search

      west homepage - no header
      west subpage - blue search bar (action) / white nav / colour logo / has search

      memorial north homepage - dark grey search bar / white nav / black logo / has search
      memorial west homepage  - dark grey search bar / white nav / black logo / has search
  */
  const themeLogos = (cardinal_name, is_memorial) => {
    if (is_memorial === true) {
      switch (cardinal_name) {
        case 'north':
          return (
            <Styles.LogoWhite>
              <NorthBlackLogo />
            </Styles.LogoWhite>
          );
        case 'west':
          return (
            <Styles.LogoWhite>
              <WestBlackLogo />
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
            <Styles.LogoColoured>
              <WestColouredLogo />
            </Styles.LogoColoured>
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

  const toggleMenu = () => {
    const show = showMenu;
    setShowMenu(!show);
  };

  return (
    <Styles.Container $isHomepage={isHomepage} data-testid="Header">
      {!hideSearchBar && (
        <Styles.SearchContainer>
          <MaxWidthContainer noPadding noBackground>
            <Styles.SearchWrapper>
              <Styles.SearchBarContainer>
                <Searchbar
                  isLight={themeContext.cardinal_name === 'north' ? true : false}
                  isLarge
                  submitInfo={{
                    postTo: '/search',
                    params: {
                      type: 'search',
                    },
                  }}
                  suggestions={searchSuggestions}
                />
              </Styles.SearchBarContainer>
            </Styles.SearchWrapper>
          </MaxWidthContainer>
        </Styles.SearchContainer>
      )}
      <MaxWidthContainer noPadding noBackground>
        <Styles.NavContainer {...props}>
          <Styles.LogoWrapper>
            <Styles.HomeLink href={homeLink} title="Home" id="logo">
              {themeLogos(themeContext.cardinal_name, themeContext.is_memorial)}
            </Styles.HomeLink>
          </Styles.LogoWrapper>
          {(hasNewsLink || allServicesLink || hasDirectoryLink || accessibilityLink) && (
            <Styles.MenuContainer>
              <Styles.MenuButton
                onClick={toggleMenu}
                aria-label={showMenu ? 'Hide navigation menu' : 'Show navigation menu'}
                aria-expanded={showMenu ? 'true' : 'false'}
                aria-controls="header-nav-menu"
              >
                <span>Menu</span>
                <Styles.MenuIconContainer>
                  <ChevronIcon
                    direction={showMenu ? 'up' : 'down'}
                    colourFill={themeContext.theme_vars.colours.action}
                  />
                </Styles.MenuIconContainer>
              </Styles.MenuButton>
              <Styles.LinksNav $showMenu={showMenu} id="header-nav-menu">
                <Styles.LinksList>
                  {hasNewsLink && (
                    <Styles.LinksItem>
                      <Styles.Link href="/news">News</Styles.Link>
                    </Styles.LinksItem>
                  )}
                  {allServicesLink && (
                    <Styles.LinksItem>
                      <Styles.Link href={isHomepage ? '#all-services' : allServicesLink + '#all-services'}>
                        All services
                      </Styles.Link>
                    </Styles.LinksItem>
                  )}
                  {hasDirectoryLink && (
                    <Styles.LinksItem>
                      <Styles.Link href="/directory">Directories</Styles.Link>
                    </Styles.LinksItem>
                  )}
                  {accessibilityLink && (
                    <Styles.LinksItem>
                      <Styles.Link href={accessibilityLink}>Accessibility</Styles.Link>
                    </Styles.LinksItem>
                  )}
                </Styles.LinksList>
              </Styles.LinksNav>
            </Styles.MenuContainer>
          )}
        </Styles.NavContainer>
      </MaxWidthContainer>
    </Styles.Container>
  );
};

export default Header;
