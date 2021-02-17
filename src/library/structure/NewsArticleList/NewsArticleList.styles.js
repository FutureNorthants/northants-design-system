import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles};
`


export const Title = styled.a`
  ${props => props.theme.linkStyles};
  font-size: 1.2em;
  display: block;
  margin-bottom: 5px;
`

export const Excerpt = styled.div`
  display: block;
`

export const Image = styled.img`
  display: block;
`