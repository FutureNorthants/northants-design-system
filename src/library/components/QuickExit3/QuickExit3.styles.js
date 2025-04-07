import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const QuickExit3ButtonContainer = styled.div`
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  background-color: ${(props) => props.theme.theme_vars.colours.positive};
  color: ${(props) => props.theme.theme_vars.colours.white} !important;
  //opacity: 0.85;
  position: fixed;
  top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  z-index: 2;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: 12pt;
  border-style: none;
  cursor: pointer;
  padding-bottom: 0px;

  &:focus {
    color: ${(props) => props.theme.theme_vars.colours.white} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    //opacity: 1;
  }

  &:active {
    color: ${(props) => props.theme.theme_vars.colours.white} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    //opacity: 1;
  }

  &:hover {
    color: ${(props) => props.theme.theme_vars.colours.white} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    //opacity: 1;
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    font-size: ${(props) => Math.floor(props.theme.theme_vars.breakpoints.s / 100)} pt;
    //background-color: pink;
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 16pt;
    //background-color: cyan;
  }

  @media only screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    font-size: 28pt;
    //background-color: yellow;
  }
`;

export const QuickExit3PageContentContainer = styled.div`
  z-index: 1;
  position: relative;
`;

export const QuickExit3Button = styled.button`
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
  //display: inline-block;
  border-radius: inherit;
  background-color: transparent;
  font-family: inherit;
  font-size: inherit;
  color: inherit;
  border-style: inherit;
  cursor: inherit;
  opacity: inherit;

  display: grid;
  grid-template-columns: auto auto;

  span span svg {
  display:inline-flex;
  align-items:bottom;
  padding: 0;
  height: 100%;
}
;
`;

export const QuickExit3ButtonLabelContainer = styled.p`
display:inline-flex;
align-items:bottom;
align-self:bottom;
padding-top:10px;
padding-left: 10px;
padding-right:10px;
padding-bottom:0px;
height: 1.5em;
`

//${(props) => props.theme.theme_vars.fontSizes.small};
//${(props) => props.theme.theme_vars.fontSizes.extra_small};
//${(props) => props.theme.theme_vars.fontSizes.extra_small};

export const QuickExitIconContainer = styled.div`

`