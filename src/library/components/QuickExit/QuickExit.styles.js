import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  position: fixed;
  top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  z-index: 2;
`;

export const QuickExitButton = styled.button`
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding-right: ${(props) => (props.$hasIcon ? 0 : props.theme.theme_vars.spacingSizes.small)};
  text-align: center;
  vertical-align: middle;
  width: 100%;
  height: 100%;
  text-decoration: none;
  display: inline-block;
  border-radius: ${(props) => props.theme.theme_vars.border_radius_large};
  background-color: ${(props) => props.theme.theme_vars.colours.positive};
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
  color: ${(props) => props.theme.theme_vars.colours.white};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  outline: none;
  border: none;
  cursor: pointer;
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

  &:hover {
    color: ${(props) => props.theme.theme_vars.colours.white};
    background-color: ${(props) => props.theme.theme_vars.colours.action};

    svg path {
      fill: white;
      stroke: ${(props) => props.theme.theme_vars.colours.action} !important;
    }
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus}
    h3 {
      color: ${(props) => props.theme.theme_vars.colours.black};
    }
  }

  &:active {
    ${(props) => props.theme.linklStylesActive}
    h3 {
      color: ${(props) => props.theme.theme_vars.colours.black};
    }
  }

  & span svg path {
    stroke-width: 1px;
    stroke: ${(props) => props.theme.theme_vars.colours.positive};
  }

  & h3 {
    color: white;
    line-height: 1;

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

  & > div > span {
    padding: 0;
  }
`;
