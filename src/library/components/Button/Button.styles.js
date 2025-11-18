import styled from 'styled-components';

export const StyledButton = styled.a`
  font-weight: 700;
  border: 3px solid;
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
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      border-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesFocus}
    }
    &:active {
      transform: translateY(2px);
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      border-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesActive}
    }
  }
  &.button--secondary {
    color: ${(props) =>
      props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action} !important;
    background-color: ${(props) => props.theme.theme_vars.colours.white};
    border-color: ${(props) => (props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action)};
    font-size: 14px;

    &:hover {
      background-color: ${(props) =>
        props.$colourOverride ? props.$colourOverride : props.theme.theme_vars.colours.action}1A;
    }
    &:focus {
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      border-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesFocus}
    }
    &:active {
      transform: translateY(2px);
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      border-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesActive}
    }
  }
  &.button--small {
    font-size: 13px;
    padding: 10px 16px;
    font-weight: 600;
  }
  &.button--medium {
    font-size: 14px;
    padding: 12px 20px;

    &.button--secondary {
      padding: 12px 12px;
    }
  }
  &.button--large {
    font-size: 16px;
    padding: 16px 24px;
  }
`;
