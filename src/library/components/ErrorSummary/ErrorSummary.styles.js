import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  padding: 0 ${(props) => props.theme.theme_vars.spacingSizes.medium};
  border: 2px solid ${(props) => props.theme.theme_vars.colours.negative};
`;

export const ErrorList = styled.ul`
  list-style: none;
  margin-left: 0;
  margin-right: 0;
`;

export const ErrorMessage = styled.li`
  left: 0;
  margin-bottom: 0 !important;
`;

export const ErrorLink = styled.a`
  display: block;
  color: ${(props) => props.theme.theme_vars.colours.negative} !important;
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small} 0;
`;
