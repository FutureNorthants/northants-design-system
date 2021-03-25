import styled from "styled-components";

const imageHeightMobile = 150;
const imageHeightDesktop = 200;

export const Container = styled.div`
  ${props => props.theme.fontStyles};
  padding: 15px 0;
`


export const Title = styled.a`
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


export const ArticleContainer = styled.div`
  background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  overflow: hidden;
  /* display: block; */
  text-decoration: none !important;
  font-weight: normal !important;


  &:hover {
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .news-article-list__image {
      ${props => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    
    .news-article-list__image {
      ${props => props.theme.linkStylesFocus};
    }
  }


  margin-bottom: 40px;


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: flex;
    align-items: stretch;
    align-content: stretch;
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
    order: 1;
    height: auto;
    min-width: 180px;
  }

`


export const ArticleContent = styled.div`
  padding: 15px;

`

export const Excerpt = styled.div`
`



export const DateContainer = styled.div`
  padding-top: 1em;
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;


    /* color: blue !important;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
      color: green !important;

    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      color: red !important;
    } */


  }





`

// export const Container = styled.div`
//   ${props => props.theme.fontStyles};
// `


// export const ArticleContainer = styled.div`
//   display: grid;
//   grid-template-columns: 1fr 140px;
// `


// export const ArticleContent = styled.div`

// `

// export const ResultInfo = styled.div`
//   font-weight: bold;
//   margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
// `


// export const Title = styled.a`
//   ${props => props.theme.linkStyles};
//   font-size: 1.2em;
//   display: block;
//   margin-bottom: 5px;
// `


// export const ImageContainer = styled.div`
//   display: block;
//   width: 140px;
//   height: 140px;
//   overflow: hidden;
//   background-image: url("${props => props.background}");
//   background-size: cover;
//   background-position: center;
//   border-radius: ${props => props.theme.theme_vars.border_radius};
//   justify-self: center;
//   margin: 0 0 0 10px;
// `
