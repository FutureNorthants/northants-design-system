import styled from 'styled-components';
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Container = styled.footer`
  background-color: ${(props) => props.theme.theme_vars.colours.black};
  padding: 25px 0;
`;

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  color: ${(props) => props.theme.theme_vars.colours.white};
`;

export const FooterList = styled.ul`
  padding: 0px;
  margin-left: 0;
  margin-bottom: 25px;
  list-style-type: none;

  li:last-of-type {
    margin-bottom: 0;
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    margin-bottom: 0px;
  }
`;

export const FooterListItem = styled.li`
  display: inline-block;
  left: 0;
  padding-right: 0;
  margin-right: 25px;
  margin-bottom: 15px;
`;

export const SocialLinks = styled.ul`
  margin: 5px 0 15px 0;
  list-style: none;
`;

export const SocialLinkItem = styled.li`
  left: 0;
  display: inline-block;
`;

export const SocialLinkSingle = styled.a`
  display: inline-block;
  height: 36px;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: 2px transparent solid;
    border-radius: 3px;
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
  &:active {
    opacity: 1;
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
`;

export const FooterLink = styled.a`
  ${(props) => props.theme.linkStyles}
  color: ${(props) => props.theme.theme_vars.colours.white};
  font-weight: 400;

  &:hover {
    ${(props) => props.theme.linkStylesHover}
    color: ${(props) => props.theme.theme_vars.colours.white};
    opacity: 0.8;
  }
  &:focus {
    ${(props) => props.theme.linkStylesFocus}
    box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -2px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
  }
  &:active {
    ${(props) => props.theme.linkStylesActive}
    box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.white} inset;
  }
`;

export const FooterCopy = styled.p``;

export const FooterAlignment = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`;

export const LogoWhite = styled.div`
  svg {
    width: 240px;
    height: auto;
    vertical-align: middle;
  }
`;
