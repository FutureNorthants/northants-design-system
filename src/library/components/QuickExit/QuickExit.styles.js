import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const QuickExitButtonContainer = styled.div`
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  background-color: ${(props) => props.theme.theme_vars.colours.positive } !important;
  color: ${(props) => props.theme.theme_vars.colours.white } !important;
  opacity: ${(props) => props.$quickExitButtonSolidOrTransparent === 'transparent' ? 0.50 : 1};
  position: fixed;
  top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  z-index: 2;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  border-style: solid;
  border-color: ${(props) => props.$quickExitButtonSolidOrTransparent === 'transparent' ? 'limegreen' : 'black'};
  cursor: pointer;

  &:focus, &:active, &:hover {
    opacity: 1;
    border-color: ${(props) => props.$quickExitButtonSolidOrTransparent === 'transparent' ? 'black' : 'white'};
    color: ${(props) => props.theme.theme_vars.colours.white } !important;
    background-color: ${(props) => props.$quickExitButtonSolidOrTransparent === 'solid' ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.positive } !important;    
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  }
`;

export const QuickExitButton = styled.button`
  padding-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-left: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  cursor: inherit;
  text-decoration: none;
  display: inline-block;
  border-radius: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-style: inherit;
  cursor: inherit;
  opacity: inherit;
  text-shadow: none;

  &:hover {
    text-shadow: ${(props) => props.$quickExitButtonSolidOrTransparent === 'transparent' ? 'darkgreen 1px 1px 2px' : 'inherit' } !important;
  }
`;