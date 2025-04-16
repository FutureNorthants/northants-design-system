import styled from 'styled-components';

export const Container = styled.div`
  display: block;  
  position: fixed;
  top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  z-index: 2;
`;

export const QuickExitButton = styled.button`
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-right: ${(props) => props.$hasIcon ? 0 : props.theme.theme_vars.spacingSizes.small};
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: inline-block;
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  background-color: ${(props) => props.theme.theme_vars.colours.positive } !important;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  color: ${(props) => props.theme.theme_vars.colours.white } !important;
  border-style: solid;
  border-color: ${(props) => props.$isTransparent ? 'limegreen' : 'black'};
  cursor: pointer;
  opacity: ${(props) => props.$isTransparent ? 0.5 : 1 };
  text-shadow: none;
  justify-items: right;

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  }

  &:focus, 
  &:active,
  &:hover {
    opacity: 1;
    border-color: ${(props) => props.$isTransparent ? 'black' : 'white' };
    color: ${(props) => props.theme.theme_vars.colours.white } !important;
    background-color: ${(props) => props.$isTransparent ? props.theme.theme_vars.colours.positive : props.theme.theme_vars.colours.action } !important;    
    text-shadow: ${(props) => props.$isTransparent ? 'inherit' : 'darkgreen 1px 1px 2px' } !important;

    svg path {
      fill: white;
      stroke: ${(props) => props.theme.theme_vars.colours.action } !important;    
    }
  }

  & span svg path {
    stroke-width: 1px;
    stroke: darkgreen;
  }

  & h3 {
    color: white;
    text-shadow: darkgreen 1px 1px 2px;
    border-color: yellow;
    border-style: solid;

    @media only screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
    padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  }
  }

  & > div > div {
    justify-self: flex-end;

  }

  & > div {
    justify-content: space-evenly;
  }

  & > div > span  {
    padding: 0;
  }
`;