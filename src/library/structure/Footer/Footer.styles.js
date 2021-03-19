import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Container = styled.footer`
  background-color: ${props => props.theme.theme_vars.colours.black};
  padding: 25px 0;
`
export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  color: ${props => props.theme.theme_vars.colours.white};
`
export const FooterList = styled.ul`
  padding: 0px;
  margin-bottom: 0px;
  list-style-type: none;

  li:last-of-type {
      margin-bottom: 0;
  }
`
export const FooterListItem = styled.li`
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 15px;
`
export const SocialLinks = styled.div`
  margin-bottom: 15px;
  margin-top: 5px;
`
export const SocialLinkSingle = styled.a`
  display: inline-block;
  margin-right: 15px;
  height: 36px;

  &:hover {
    opacity: 0.8;
  }
  &:focus {
    outline: none;

    svg {
      path {
        fill: ${props => props.theme.theme_vars.colours.focus} !important;
      }
    }
  }
  &:active{
    opacity: 1;

    svg {
      path {
        fill: ${props => props.theme.theme_vars.colours.focus} !important;
      }
    }
  }
`
export const FooterLink = styled.a`
  ${props => props.theme.linkStyles}
  color: ${props => props.theme.theme_vars.colours.white};
  font-weight: 400;

  &:hover{
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.white};
      opacity: 0.8;
    }
  &:focus{
      ${props => props.theme.linkStylesFocus}
      box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
      -webkit-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
      -moz-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
  }
  &:active{
    ${props => props.theme.linkStylesActive}
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.white} inset;
  }
`
export const FooterCopy = styled.p`
  
`
export const FooterAlignment = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
`
export const LogoWhite = styled.div`
  svg {
    width: 240px;
    height: auto;
    vertical-align: middle;
  }
`