import styled from "styled-components";

const imageHeightMobile = 150;
const imageHeightDesktop = 200;

export const Container = styled.div`
  ${props => props.theme.fontStyles};
  padding: 15px 0;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`
export const PromoContainer = styled.a`
  background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  overflow: hidden;
  display: block;
  text-decoration: none !important;
  font-weight: normal !important;
  margin-bottom: 15px;
  ${props => props.theme.fontStyles}

  h2 {
    margin-top: 5px;
  }

  &:hover {
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    width: 100%;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: 100%;
    margin-right: 30px;
    margin-bottom: 20px;
    display: block;
    flex: 1;
    max-width: 50%;
    min-width: 30%;

    &:nth-of-type(2n) {
        margin-right: 30px;
    }
    &:nth-of-type(3n) {
        margin-right: 0;
    }
    &:last-of-type {
        margin-right: 0;
    }
  }
`

export const PromoContent = styled.div`
  padding: 15px;
  height: calc(100% - ${imageHeightMobile + 30}px);

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    height: calc(100% - ${imageHeightDesktop + 30}px);
  }
`

export const ImageContainer = styled.span`
  display: block;
  width: 100%;
  height: ${imageHeightMobile}px;
  overflow: hidden;
  background-image: url("${props => props.background}");
  background-size: cover;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    flex: 0 0 40%;  
    height: 100%;
    min-height: ${imageHeightMobile}px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    flex: none;
    height: ${imageHeightDesktop}px;
  }
`

/**
 * The call to action link below the content; uses appropriate link styles from 
 * the theme, but also varies appearance depending on parent PromoContainer's state
 */
export const CallToAction = styled.a`
    margin-top: 10px;
    display: inline-block;
    padding: 3px 7px;
    margin-left: -7px;
    ${PromoContainer}:hover & {
      ${props => props.theme.linkStylesHover};
    }
    ${PromoContainer}:focus & {
      ${props => props.theme.linkStylesFocus};
    }
    ${PromoContainer}:active & {
      ${props => props.theme.linkStylesActive};
    }
    ${props => props.theme.linkStyles};
`
