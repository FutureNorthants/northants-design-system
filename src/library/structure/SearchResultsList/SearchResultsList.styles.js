import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles};
`

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
`

export const Result = styled.div`
  margin-bottom: ${props => props.theme.theme_vars.spacingSizes.x_large};

  &:first-of-type {
    margin-top: 0;
  }
`

export const Title = styled.a`
  ${props => props.theme.linkStyles};
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
`

export const ServiceArea = styled.p`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;
  color: ${props => props.theme.theme_vars.colours.grey_dark};
  margin-bottom: 3px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;
  }
`

export const Summary = styled.p`
  margin-bottom: ${props => props.theme.theme_vars.spacingSizes.small};
`

export const SignpostContainer = styled.div`
  font-size: 14px;
  font-size: 0.8rem;
  line-height: 1.3;

  ul {
    margin-top: 8px !important;
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;

    li {
      margin-bottom: 5px;
    }
  }


  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.4;

    ul {
      font-size: 16px;
      font-size: 1rem;
      line-height: 1.4;
    }
  }
`