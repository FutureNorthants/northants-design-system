import styled from 'styled-components';

export const StyledButton = styled.a`
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  text-decoration: none !important;
  width: calc(100% - 48px);
  width: -webkit-fill-available;
  text-align: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    width: auto;
  }
  &.button--primary {
    color: white !important;
    background-color: ${(props) =>
      props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action};

    &:hover {
      background-color: ${(props) =>
        props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action_dark};
    }
    &:focus {
      outline: none;
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
    }
    &:active {
      transform: translateY(2px);
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
    }
  }
  &.button--secondary {
    color: ${(props) =>
      props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action} !important;
    background-color: transparent;
    border: 3px solid
      ${(props) => (props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action)};

    &:hover {
      background-color: ${(props) =>
        props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action}1A;
    }
    &:focus {
      outline: none;
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      border-color: transparent;
      box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
    }
    &:active {
      transform: translateY(2px);
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      border-color: transparent !important;
      box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
    }
  }
  &.button--small {
    font-size: 12px;
    padding: 10px 16px;
  }
  &.button--medium {
    font-size: 14px;
    padding: 11px 20px;

    &.button--secondary {
      padding: 8px 12px;
    }
  }
  &.button--large {
    font-size: 16px;
    padding: 14px 24px;
  }
`;
