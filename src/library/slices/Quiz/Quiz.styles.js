import styled from 'styled-components';
import { StyledButton } from '../../components/Button/Button.styles';

export const Container = styled.div`
  display: block;
`;

export const Button = styled.button`
  font-weight: 700;
  border: 0;
  cursor: pointer;
  display: inline-block;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  text-decoration: none !important;
  width: auto;
  text-align: center;
  color: white !important;
  font-size: 16px;
  padding: 16px 24px;
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
`;
