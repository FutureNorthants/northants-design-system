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
