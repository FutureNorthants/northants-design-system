import styled from "styled-components";

export const Container = styled.div`
  display: block;
  ${props => props.theme.fontStyles}
`

export const Row = styled.div`
  margin-bottom:15px;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};
  display: grid; 
  grid-template-columns: minmax(80px,min-content) 1fr; 
  grid-template-rows: 1fr; 
  gap: 0px 1em; 
  grid-template-areas: 
    "letter data"; 
`

export const Letter = styled.div`
  text-transform: uppercase;
  ${props => props.theme.theme_vars.h1}
  grid-area: letter;
`

export const Data = styled.div`
  padding:15px;
  column-count: 2;
  column-gap: 15px;
`

export const Link = styled.a`
  /* display: block; */
  padding: .5em 0px;
  width: 100%;  
  display: inline-block;

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
`


export const BackButton = styled.a`

  display: inline-block;
  position: relative;
  margin-top: 15px;
  margin-bottom: 15px;
  padding-left: 14px;


  ${props => props.theme.fontStyles}

  &:hover{
      ${props => props.theme.linkStylesHover}
  }
  &:focus{
      ${props => props.theme.linkStylesFocus}
  }
  &:active{
      ${props => props.theme.linkStylesActive}
  }


  &:before {
    content: "";
    display: block;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 3px;
    width: 7px;
    height: 7px;
    margin: auto 0;
    -webkit-transform: rotate(225deg);
    -ms-transform: rotate(225deg);
    transform: rotate(225deg);
    border: solid;
    border-width: 1px 1px 0 0;
    border-color: #505a5f;
  }

  &:focus:before {
    border-color: #0b0c0c;
  }

  &:after {
    content: "";
    position: absolute;
    top: -14px;
    right: 0;
    bottom: -14px;
    left: 0;
  }
`