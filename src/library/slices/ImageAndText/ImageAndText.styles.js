import styled from 'styled-components';

export const Container = styled.div`
  display: block;
`;

export const HeadingContainer = styled.div`
  h3 {
    margin-bottom: 0;
  }
`;

export const Content = styled.div`
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  }
`;
