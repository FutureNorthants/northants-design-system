import styled from 'styled-components';
import { VisuallyHidden } from './../../helpers/style-helpers';

export const Container = styled.div`
  padding: 0;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  ${(props) => props.theme.fontStyles}

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    background: url('${(props) => props.image}') no-repeat center center;
    background-size: cover;
    padding-top: ${(props) => (props.image ? '8rem' : 0)};
    padding-bottom: ${(props) => (props.image ? '8rem' : 0)};
    padding-left: ${(props) => (props.image ? props.theme.theme_vars.spacingSizes.x_large : 0)};
    padding-right: ${(props) => (props.image ? props.theme.theme_vars.spacingSizes.x_large : 0)};
  }

  input[type='text'] {
    border-top-right-radius: 0;
    border-bottom-right-radius: 0;
    flex-grow: 1;
    margin-bottom: 0;
  }

  h2 {
    text-align: center;
  }
`;

export const LinkContainer = styled.div`
  height: 100%;
  display: flex;
  align-items: flex-end;

  a {
    width: 100%;
    height: 2.28rem;
    padding: 12px !important;
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      height: 2.6rem;
    }
  }
`;

export const Inner = styled.div`
  background-color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_light
      : props.theme.theme_vars.colours.white};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  box-shadow: 1px 1px 5px 1px rgba(0, 0, 0, 0.2);
  border-radius: ${(props) => props.theme.theme_vars.border_radius};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    padding: ${(props) => props.theme.theme_vars.spacingSizes.large};
    max-width: ${(props) => props.theme.theme_vars.breakpoints.m};
    margin: 0 auto;
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
  height: 2.28rem;
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    height: 2.6rem;
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
