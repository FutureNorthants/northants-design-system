import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Container = styled.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
    background-color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action};
    border-bottom: ${props => props.isHomepage === "true" ? "5px solid "+props.theme.theme_vars.colours.action : "none"};
    padding: 3px 0;
`

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`

const LogoStyles = `
    svg {
        width: 200px;
        height: auto;
        vertical-align: middle;
    }
`
export const LogoColoured = styled.div`
    ${LogoStyles}
`
export const LogoWhite = styled.div`
    ${LogoStyles}
`

export const HomeLink = styled.a`
    &:hover {
        opacity: 0.8;

        svg {
            opacity 0.8;
        }
    }
`

export const AllServicesLink = styled.a`
    ${props => props.theme.linkStyles};
    color: ${props => props.isHomepage === "true" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.action};

    &:hover {
        ${props => props.theme.linkStylesHover};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
`