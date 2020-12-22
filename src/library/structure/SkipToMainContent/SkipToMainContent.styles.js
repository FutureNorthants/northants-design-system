import styled from "styled-components";

export const SkipToMainContent = styled.a `
  ${props => props.theme.fontStyles}

  position: absolute;
  width: 1px;
  height: 1px;
  margin: 0;
  overflow: hidden;
  clip: rect(0 0 0 0);
  clip-path: inset(50%);
  white-space: nowrap;
  display: block;
  padding: 10px 15px;
 
  &:active,
  &:focus {
    position: static;
    width: auto;
    height: auto;
    margin: inherit;
    overflow: visible;
    clip: auto;
    -webkit-clip-path: none;
    clip-path: none;
    white-space: inherit
  }

  &:link,
  &:visited,
  &:hover,
  &:active,
  &:focus {
    color: ${props => props.theme.theme_vars.colours.black};
  }



  @media (min-width: 40.0625em) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25
  }



  &:focus {
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
    outline-offset: 0;
    background-color: ${props => props.theme.theme_vars.colours.focus};
  }




`