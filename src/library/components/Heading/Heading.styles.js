import styled from 'styled-components';

export const H1 = styled.h1`
  color: ${(props) => props.theme.theme_vars.colours.black};
  margin-left: 0;
  font-weight: 700;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  margin-bottom: 20px;

  font-size: 32px;
  font-size: 2rem;
  line-height: 1.1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 44px;
    font-size: 2.6rem;
    max-width: 960px;
    margin-bottom: 30px;
  }
`;
export const H2 = styled.h2`
  color: ${(props) => props.theme.theme_vars.colours.black};
  font-weight: 700;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  margin-top: 25px;
  margin-bottom: 15px;

  font-size: 24px;
  font-size: 1.5rem;
  line-height: 1.25;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 36px;
    font-size: 1.75rem;
    max-width: 960px;
  }
`;
export const H3 = styled.h3`
  color: ${(props) => props.theme.theme_vars.colours.black};
  font-weight: 600;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  margin-top: 25px;
  margin-bottom: 15px;

  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.25;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 24px;
    font-size: 1.5rem;
    max-width: 960px;
  }
`;
export const H4 = styled.h4`
  color: ${(props) => props.theme.theme_vars.colours.black};
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
  margin-top: 25px;
  margin-bottom: 15px;

  font-weight: 600;
  line-height: 1;
  font-family: ${(props) => props.theme.theme_vars.fontstack};
`;
