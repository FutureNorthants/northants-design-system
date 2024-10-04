import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  padding-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const ToggleButton = styled.button`
  background-color: ${(props) =>
    props.$isActive ? props.theme.theme_vars.colours.focus : props.theme.theme_vars.colours.white};
  border: 2px solid
    ${(props) => (props.$isActive ? props.theme.theme_vars.colours.focus : props.theme.theme_vars.colours.action)};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  border-bottom: ${(props) => (props.$isActive ? 'none' : `2px solid ${props.theme.theme_vars.colours.action}`)};
  box-shadow: ${(props) =>
    props.$isActive ? `none` : `0px -1px 0px 0px ${props.theme.theme_vars.colours.black} inset`};
  margin-top: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin-right: ${(props) => props.theme.theme_vars.spacingSizes.small};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  line-height: 1.5;
  font-size: 1rem;
  cursor: ${(props) => (props.$isActive ? 'auto' : 'pointer')};
  outline: none;

  &:hover {
    background: ${(props) =>
      props.$isActive ? props.theme.theme_vars.colours.focus : props.theme.theme_vars.colours.action_light};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
    transform: ${(props) => (props.$isActive ? 'none' : 'translateY(2px)')};
    box-shadow: ${(props) =>
      props.$isActive ? `none` : `0px -1px 0px 0px ${props.theme.theme_vars.colours.black} inset`};
  }
`;
