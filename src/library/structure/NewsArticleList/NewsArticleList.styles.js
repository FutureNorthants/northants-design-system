import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles};
`


export const ArticleContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 140px;
`


export const ArticleContent = styled.div`

`

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${props => props.theme.theme_vars.spacingSizes.large} 0;
`


export const Title = styled.a`
  ${props => props.theme.linkStyles};
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
`





export const ImageContainer = styled.div`
  display: block;
  width: 140px;
  height: 140px;
  overflow: hidden;
  background-image: url("${props => props.background}");
  background-size: cover;
  background-position: center;
  border-radius: ${props => props.theme.theme_vars.border_radius};
  justify-self: center;
  margin: 0 0 0 10px;
`
