import styled from 'styled-components';
import { VisuallyHidden } from './../../helpers/style-helpers';

export const Container = styled.div`
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light + '7a'
      : props.theme.theme_vars.colours.white};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  padding: ${(props) => props.theme.theme_vars.spacingSizes.large};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  ${(props) => props.theme.fontStyles}

  input[type="text"] {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex-grow: 1;
    margin-bottom: 0;
  }
`;

const hideLabel = (props) => {
  if (props.labelHidden) {
    return VisuallyHidden;
  }
};

export const Label = styled.label`
  font-weight: bold;
  ${hideLabel}
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

export const Button = styled.input`
  flex-grow: 0;
  cursor: pointer;
  margin: 0;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  background: ${(props) =>
    props.isLight ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.grey_darkest};
  color: ${(props) => props.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: calc(${(props) => props.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${(props) => props.theme.theme_vars.border_radius} * 2);
  text-align: center;
  height: ${(props) => (props.isLarge ? '2.9rem' : '2.28rem')};
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    height: ${(props) => (props.isLarge ? '3.22rem' : '2.6rem')};
  }

  &:hover {
    background: ${(props) =>
      props.isLight ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.black};
  }

  &:focus {
    outline: none;
    background: ${(props) => props.theme.theme_vars.colours.focus};
    svg {
      path {
        fill: ${(props) => props.theme.theme_vars.colours.black};
      }
    }
  }

  &:active {
    transform: translateY(1px);
    background-color: ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${(props) => props.theme.theme_vars.colours.black};
    border-top-color: ${(props) => props.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
  }
`;
