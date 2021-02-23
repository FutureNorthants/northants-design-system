import styled from "styled-components";

export const Container = styled.a`
    ${props => props.theme.linkStyles}
    font-weight: normal;

    &:hover {
      ${props => props.theme.linkStylesHover}
    }
    &:focus {
      ${props => props.theme.linkStylesFocus}
    }
    &:active {
      ${props => props.theme.linkStylesActive}
    }
`

