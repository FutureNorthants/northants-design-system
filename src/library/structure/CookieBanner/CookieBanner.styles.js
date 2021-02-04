import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  background-color: ${props => props.theme.theme_vars.colours.grey_light};
  padding: ${props => props.theme.theme_vars.spacingSizes.medium} 0;
  width: 100%;
  display: block;
  box-sizing: border-box;
`

export const CookieMessage = styled.div`
      margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`

export const CookieHeading = styled.h2`
  ${props => props.theme.theme_vars.h3}

`

export const CookieParagraph = styled.div`
    margin: ${props => props.theme.theme_vars.spacingSizes.medium} 0;

     a {
        ${props => props.theme.linkStyles}
        &:hover{
            ${props => props.theme.linkStylesHover}
        }
        &:focus{
            ${props => props.theme.linkStylesFocus}
        }
        &:active{
            ${props => props.theme.linkStylesActive}
        }
    }
`

export const AcceptButton = styled.span`
  display: inline-block;
  margin: 0 10px 0 0;
`

export const RejectButton = styled.span`
  display: inline-block;
  margin: 0 10px;
`

