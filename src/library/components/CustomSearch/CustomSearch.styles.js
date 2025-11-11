import styled from 'styled-components';
import { VisuallyHidden } from './../../helpers/style-helpers';

export const Container = styled.div`
  display: block;

  input[type='text'] {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex-grow: 1;
    margin-bottom: 0;
    min-height: 44px;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  ${(props) =>
    props.$hasHiddenLabel
      ? VisuallyHidden
      : `display: inline-block; padding-bottom: ${props.theme.theme_vars.spacingSizes.small}`}
`;

export const InputWrapper = styled.div`
  position: relative;
  display: flex;
  flex-wrap: nowrap;
  width: 100%;
`;

export const SubmitButton = styled.input`
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
  min-height: 44px;

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
