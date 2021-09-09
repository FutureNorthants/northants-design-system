import styled from "styled-components";


export const Wrapper = styled.header`
    background: ${props => props.theme.theme_vars.colours.action}5A;
    background: ${props => props.noBackground ? "transparent" : 
        props.theme.cardinal_name === "north" ?  (props.theme.theme_vars.colours.grey_light+"7a") : props.theme.theme_vars.colours.white};
    overflow: ${props => props.noPadding ? "hidden" : "visible"};
    padding-bottom: 50px;
`

export const Container = styled.div`
    font-family: ${props => props.theme.theme_vars.fontstack};

    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
   
    margin-right: 15px;
    margin-left: 15px;
    overflow: hidden;

    pre {
        font-family: monospace;
        white-space: pre;
    }
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

export const Left = styled.div`
   
`

export const Right = styled.div`
    
`


export const Wrapperold = styled.div`
background-color: ${props => props.theme.theme_vars.colours.grey};
`

export const ContainerOld = styled.div `
   background-color: ${props => props.theme.theme_vars.colours.grey};
    display: flex;
    justify-content: space-between;
    align-items: center;
    align-content: stretch;
    flex-wrap: nowrap;
    flex-direction: column-reverse;
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
      flex-direction: row;
    }

`

export const LeftOld = styled.div `
  padding: 30px 0px;
  
  width: 100%;

  box-sizing: border-box;
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
     width: 60%;
     padding: 10px 30px;
    }
`

export const Image = styled.div `

  transition: all 0.25s ease;

  background-image: url("${props => props.image}");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;

  width: 100%;
  height: 300px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    height: 500px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    height: 760px;
  }

`


export const StyledMaxWidthContainer = styled.div`

    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 0px;
        margin-left: 0px;
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
      margin-right: 0px;
      margin-left: 0px;
  }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
    }
`

export const HiddenH1 = styled.h1`
    visibility: hidden;
    margin: 0;
    padding: 0;
    font-size: 0px;
`