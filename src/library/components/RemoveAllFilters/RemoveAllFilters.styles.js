import styled from "styled-components";

export const Container = styled.a`
    ${props => props.theme.linkStyles}
    color: ${props => props.theme.theme_vars.colours.negative};
    font-weight: normal;

    &:hover {
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.negative}
    }
    &:focus {
      ${props => props.theme.linkStylesFocus}
    }
    &:active {
      ${props => props.theme.linkStylesActive}
    }
`