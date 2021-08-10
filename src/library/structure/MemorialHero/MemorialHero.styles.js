import styled from "styled-components";


export const Wrapper = styled.div`
background-color: ${props => props.theme.theme_vars.colours.grey};
`



export const Container = styled.div `
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

export const Left = styled.div `

  padding: 10px 30px;
  width: 100%;

  box-sizing: border-box;
  
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
     width: 60%;
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
    height: 700px;
  }

`


export const StyledMaxWidthContainer = styled.div`

    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
    }
`