import styled from 'styled-components';

export const StyledTextInput = styled.input`
  display: block;
  width: 100%;
  ${(props) => props.theme.fontStyles}
  margin-top: 0 !important;
  margin-bottom: 0;
  padding: ${(props) =>
    props.isLarge ? props.theme.theme_vars.spacingSizes.small : props.theme.theme_vars.spacingSizes.extra_small};
  border: solid
    ${(props) => (props.isErrored ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.black)};
  border-width: ${(props) =>
    props.isErrored ? props.theme.theme_vars.border_width_error : props.theme.theme_vars.border_width};
  border-radius: ${(props) =>
    props.isLarge ? props.theme.theme_vars.border_radius_large : props.theme.theme_vars.border_radius};

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 2px,
      ${(props) => props.theme.theme_vars.colours.black} 0 0 0 4px;
    transition: box-shadow 0.3s ease 0s;
  }

  &::placeholder {
    color: ${(props) => props.theme.theme_vars.colours.placeholder};
    opacity: 1;
  }
  &:-ms-input-placeholder {
    color: ${(props) => props.theme.theme_vars.colours.placeholder};
  }
  &::-ms-input-placeholder {
    color: ${(props) => props.theme.theme_vars.colours.placeholder};
  }
`;
