import styled from 'styled-components';

export const StyledTextarea = styled.textarea`
  ${(props) => props.theme.fontStyles}
  margin-top: 0 !important;
  margin-bottom: 25px;
  padding: 5px;
  border: solid
    ${(props) => (props.$isErrored ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.black)};
  border-width: ${(props) => (props.$isErrored ? '3px' : '2px')};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  display: block;
  width: ${(props) => (props.$isFullWidth ? '100%' : 'auto')};

  &:focus {
    outline: none;
    box-shadow: ${(props) => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
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
