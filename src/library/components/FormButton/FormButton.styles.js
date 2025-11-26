import styled from 'styled-components';

export const StyledButton = styled.button`
  font-weight: 700;
  border: none;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  text-decoration: none;

  &:disabled {
    background-color: ${(props) => props.theme.theme_vars.colours.grey} !important;
    color: ${(props) => props.theme.theme_vars.colours.black} !important;
    cursor: not-allowed !important;
  }

  &.button--primary {
    color: white;
    background-color: ${(props) => props.theme.theme_vars.colours.action};

    &:hover {
      background-color: ${(props) => props.theme.theme_vars.colours.action_dark};
    }
    &:focus {
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesFocus}
    }
    &:active {
      transform: translateY(2px);
      color: ${(props) => props.theme.theme_vars.colours.black} !important;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      ${(props) => props.theme.linkStylesActive}
    }
  }
  &.button--secondary {
    color: ${(props) => props.theme.theme_vars.colours.action};
    background-color: transparent;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
    font-weight: 600;

    &:hover {
      background-color: ${(props) => props.theme.theme_vars.colours.action}1A;
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
    font-weight: 600;
    padding: 10px 16px;
  }
  &.button--medium {
    font-size: 15px;
    padding: 11px 20px;
  }
  &.button--large {
    font-size: 16px;
    padding: 14px 24px;
  }
`;
