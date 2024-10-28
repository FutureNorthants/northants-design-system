import styled, { css } from 'styled-components';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

/**
 * See header.tsx for colour rules
 * @param {*} props
 * @returns
 */
const headerThemeStyles = (props) => {
  if (props.theme.is_memorial === true) {
    return css`
      background-color: ${props.theme.theme_vars.colours.grey_darkest};
      border-bottom: none;
      color: ${props.theme.theme_vars.colours.white};
    `;
  }
  switch (props.theme.cardinal_name) {
    case 'north':
      return css`
        background-color: ${props.theme.theme_vars.colours.white};
        border-bottom: 5px solid ${props.theme.theme_vars.colours.action};
        color: ${props.theme.theme_vars.colours.black};
      `;
      break;
    case 'west':
      return css`
        background-color: ${props.theme.theme_vars.colours.action};
        border-bottom: none;
        color: ${props.theme.theme_vars.colours.white};
      `;
      break;
  }
};

export const Container = styled.header`
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  position: relative;
  z-index: 2;
`;

export const SearchContainer = styled.div`
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  padding: 3px 0;
  ${headerThemeStyles}
`;

export const NavContainer = styled.div`
  background-color: ${(props) => props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-wrap: wrap;
    justify-content: space-between;
  }
`;

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  overflow: visible; // Fix for search suggestions
  display: grid;
  align-items: center;
  grid-template-areas: 'headerlogo headerlinks headersearch';
  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    grid-template-areas:
      'headerlogo   headerlinks'
      'headersearch headersearch';
  }
  @media screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    grid-template-areas:
      'headerlogo'
      'headerlinks'
      'headersearch';
  }
`;

const LogoStyles = () => {
  return css`
    svg {
      width: 240px;
      height: auto;
      vertical-align: middle;
    }
    &.black_logo {
      svg {
        fill: black !important;
        path {
          fill: black !important;
        }
      }
    }
  `;
};

export const LogoColoured = styled.div`
  ${LogoStyles}
`;

export const LogoWhite = styled.div`
  ${LogoStyles}
`;

export const LogoWrapper = styled.div``;

export const HomeLink = styled.a`
  display: inline-block;

  &:hover {
    opacity: 0.8;

    svg {
      opacity: 0.8;
    }
  }
  &:focus {
    outline: 2px transparent solid;
    box-shadow:
      ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${(props) =>
          props.theme.cardinal_name === 'north'
            ? props.theme.theme_vars.colours.black
            : props.theme.theme_vars.colours.focus}
        0 0 0 4px;
    transition: box-shadow 0.3s ease 0s;
  }
`;

const commonLinkStyles = (props) => {
  if (props.theme.is_memorial === true) {
    return css`
      color: ${props.theme.theme_vars.colours.black};
      &:hover {
        color: ${props.theme.theme_vars.colours.black};
        opacity: 0.8;
      }
    `;
  }
  switch (props.theme.cardinal_name) {
    case 'north':
      return css`
        color: ${props.theme.theme_vars.colours.action};
        &:hover {
          color: ${props.theme.theme_vars.colours.action_dark};
          opacity: 1;
        }
      `;
      break;
    case 'west':
      return css`
        color: ${props.theme.theme_vars.colours.action};
        &:hover {
          color: ${props.theme.theme_vars.colours.action_dark};
          opacity: 0.8;
        }
      `;
      break;
  }
};

export const MenuContainer = styled.div`
  display: flex;
  flex-direction: column;
  border-top: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
  width: 100%;
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    border: none;
    width: auto;
    margin: 0;
  }
`;

export const MenuButton = styled.button`
  display: flex;
  justify-content: space-between;
  flex-direction: row;
  width: 100%;
  background: white;
  ${(props) => props.theme.linkStyles};
  border: none;
  outline: none;
  font-size: 19px;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  font-weight: 700;
  cursor: pointer;
  line-height: 1.45;

  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div``;

export const LinksNav = styled.nav`
  display: ${(props) => (props.$showMenu ? 'flex' : 'none')};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: flex;
  }
`;

export const LinksList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex-wrap: nowrap;
  }
`;

export const LinksItem = styled.li`
  padding: 0;
  left: 0;
  width: 100%;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: auto;
    margin-bottom: 0;
    margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  }

  &:last-of-type {
    margin-right: 0;
  }
`;

export const Link = styled.a`
  ${(props) => props.theme.linkStyles};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: block;
  width: 100%;
  ${commonLinkStyles}

  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
  }
`;

export const LinkButton = styled(Link)`
  background: none;
  border: none;
  outline: none;
  cursor: pointer;
  font-size: 19px;
  line-height: 1.45;

  span {
    text-decoration: underline;
  }

  &:hover {
    span {
      text-decoration-style: dotted;
    }
  }
`;

export const LinkButtonText = styled.span`
  display: inline-block;
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const SearchWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
  width: auto;
`;

export const SearchBarContainer = styled.div`
  width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: 60%;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    width: 40%;
  }
`;

export const TranslateContainer = styled.div`
  background: ${(props) => props.theme.theme_vars.colours.white};
  display: ${(props) => (props.$showTranslate ? 'flex' : 'none')};
  justify-content: flex-end;
  align-items: center;
  width: 100%;
`;
