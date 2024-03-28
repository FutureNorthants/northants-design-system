import styled from 'styled-components';
import { VisuallyHidden } from '../../helpers/style-helpers';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles};
`;

const hideLabel = (props) => {
  if (props.$hideLabel === true) {
    return VisuallyHidden;
  }
};

export const Label = styled.label`
  display: block;
  margin-bottom: 5px;
  ${hideLabel}
  font-weight: ${(props) => (props.$boldLabel ? 'bold' : 'normal')};
`;

export const Select = styled.select`
  ${(props) => props.theme.fontStyles};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  box-sizing: border-box;
  max-width: 100%;
  height: 40px;
  height: 2.5rem;
  padding: 5px;
  border: 2px solid
    ${(props) => (props.$isErrored ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.black)};
  display: block;
  background-color: ${(props) => props.theme.theme_vars.colours.white};

  &:focus {
    outline: 2px transparent solid;
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${(props) => props.theme.theme_vars.colours.black} 0 0 0 4px;
    transition: box-shadow 0.3s ease 0s;
  }
`;

export const Option = styled.option`
  :active,
  :checked,
  :focus::-ms-value {
    color: #fff;
    background-color: #1d70b8;
  }
`;

export const ErrorText = styled.p`
  ${(props) => props.theme.fontStyles}
  color: ${(props) => props.theme.theme_vars.colours.negative};
  font-weight: bold;
  margin-bottom: 5px;
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 18px;
    font-size: 1rem;
    line-height: 1.25;
  }
`;
