import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles};
`

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
`

export const Result = styled.div`
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;

  &:first-of-type {
    margin-top: 0;
  }
`

export const Title = styled.a`
  ${props => props.theme.linkStyles};
  font-size: 1.2em;
  margin: ${props => props.theme.theme_vars.spacingSizes.small} 0;
`

export const Summary = styled.h2`
  margin-bottom: ${props => props.theme.theme_vars.spacingSizes.small};
`

