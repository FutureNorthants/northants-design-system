import styled from "styled-components";
import gdsWhite from "./assets/gds_white.svg";
import northWhite from "./assets/north_white.svg";
import westWhite from "./assets/west_white.svg";
import gdsColoured from "./assets/gds_coloured.svg";
import northColoured from "./assets/north_coloured.svg";
import westColoured from "./assets/west_coloured.svg";

export const Container = styled.header`
    font-family: ${props => props.theme.fontstack};
    color: ${props => props.isHomepage === "true" ? props.theme.colours.black : props.theme.colours.white};
    background-color: ${props => props.isHomepage === "true" ? props.theme.colours.white : props.theme.colours.action};
    border-bottom: ${props => props.isHomepage === "true" ? "5px solid "+props.theme.colours.action : "none"};
    padding: 3px 0;
`

const LogoStyles = `
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    width: 200px;
    height: 67px;
`
export const LogoColoured = styled.div`
    ${LogoStyles}
    background-image: url(${props => props.theme.name === "North Northants theme" ? northColoured : (props.theme.name === "West Northants theme" ? westColoured : gdsColoured)})
`
export const LogoWhite = styled.div`
    ${LogoStyles}
    background-image: url(${props => props.theme.name === "North Northants theme" ? northWhite : (props.theme.name === "West Northants theme" ? westWhite : gdsWhite)})
`