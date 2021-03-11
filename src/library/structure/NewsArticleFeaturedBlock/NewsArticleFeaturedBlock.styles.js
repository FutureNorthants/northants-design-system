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

export const H2Container = styled.div`
  h2 {
    margin-top: 30px;
  }
`

export const Title = styled.p`
  ${props => props.theme.linkStyles};
  display: block;
  margin-bottom: 15px;
  height: fit-content;
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      font-size: 1.35rem;
      line-height: 1.3;
      max-width: 960px;
  }
`


export const ArticleContainer = styled.a`
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

  &:hover {
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .article_title {
      ${props => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .article_title {
      ${props => props.theme.linkStylesFocus};
    }
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${props => props.theme.theme_vars.colours.black}  !important;
    
    .article_title {
      ${props => props.theme.linkStylesActive};
    }
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: 100%;
    margin-right: 30px;
    margin-bottom: 0px;
    display: block;
    flex: 1;
    max-width: 50%;

    &:nth-of-type(2n) {
        margin-right: 30px;
    }
    &:last-of-type {
        margin-right: 0;
    }
  }
`


export const ArticleContent = styled.div`
  padding: 15px;
  height: calc(100% - ${imageHeightMobile + 30}px);

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
    flex-flow: row;
    flex-wrap: wrap;
    height: calc(100% - ${imageHeightDesktop + 30}px);
  }
`



export const ImageContainer = styled.div`
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

export const DateContainer = styled.div`
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`

export const ViewAllContainer = styled.div`
  text-align: center;
  margin-top: 25px;
`