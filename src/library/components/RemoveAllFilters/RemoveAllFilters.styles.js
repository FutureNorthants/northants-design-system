import styled from "styled-components";

export const Container = styled.a`
    ${props => props.theme.linkStyles}
    color: ${props => props.theme.theme_vars.colours.negative} !important;
    font-weight: normal;

    &:hover {
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.negative} !important;
    }
    &:focus {
      ${props => props.theme.linkStylesFocus}
      color: ${props => props.theme.theme_vars.colours.black} !important;
    }
    &:active {
      ${props => props.theme.linkStylesActive}
      color: ${props => props.theme.theme_vars.colours.black} !important;
    }
`