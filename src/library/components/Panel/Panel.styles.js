import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  background-color: ${(props) => props.theme.theme_vars.colours.positive};
  padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: flex;
  justify-content: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    padding: ${(props) => props.theme.theme_vars.spacingSizes.large};
  }
`;

export const Heading = styled.h2`
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.theme_vars.h2}
  font-size: ${(props) => props.theme.theme_vars.fontSizes.medium};
  color: ${(props) => props.theme.theme_vars.colours.white};
  text-align: center;
`;

export const Content = styled.div`
  ${(props) => props.theme.fontStyles}
  color: ${(props) => props.theme.theme_vars.colours.white};
  display: flex;
  justify-content: center;
  text-align: center;
`;
