import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const Label = styled.label`
  font-weight: bold;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
`;
