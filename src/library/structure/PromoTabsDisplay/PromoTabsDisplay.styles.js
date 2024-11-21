import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const LargeScreen = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
  }
`;

export const SmallScreen = styled.div`
  display: block;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`;
