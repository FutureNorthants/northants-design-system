import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles};
`;

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.large} 0;
`;

export const Result = styled.div`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.x_large};

  &:first-of-type {
    margin-top: 0;
  }
`;

export const Title = styled.a`
  ${(props) => props.theme.linkStyles};
  font-size: 1.2em;
  display: block;
  padding: 6px 0;

  &:hover {
    ${(props) => props.theme.linkStylesHover};
  }

  &:focus {
    ${(props) => props.theme.linkStylesFocus};
  }

  &:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

export const ServiceArea = styled.p`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: ${(props) =>
    props.theme.cardinal_name === 'west'
      ? props.theme.theme_vars.colours.grey_darke
      : props.theme.theme_vars.colours.grey_darkest};
  margin-bottom: 3px !important;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;
  }
`;

export const Summary = styled.p`
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
`;

export const SignpostContainer = styled.div`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;

  p {
    margin-bottom: 10px !important;
  }

  ul {
    margin-top: 8px !important;
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;

    li {
      margin-bottom: 5px;
    }
  }

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;

    ul {
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`;

export const Published = styled.p`
  font-weight: bold;
`;
