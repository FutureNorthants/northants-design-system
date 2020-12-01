import styled from "styled-components";

export const Container = styled.header`
    font-family: ${props => props.theme.fontstack};
    color: ${props => props.isHomepage === "true" ? props.theme.colours.black : props.theme.colours.white};
    background-color: ${props => props.isHomepage === "true" ? props.theme.colours.white : props.theme.colours.action};
    border-bottom: ${props => props.isHomepage === "true" ? "5px solid "+props.theme.colours.action : "none"};
    padding: 3px 0;
`

const LogoStyles = `
    svg {
        width: 200px;
        height: 67px;
    }
`
export const LogoColoured = styled.div`
    ${LogoStyles}
`
export const LogoWhite = styled.div`
    ${LogoStyles}
`