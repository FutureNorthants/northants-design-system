import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

/*
    north homepage - no header
    north subpage - white header / colour logo / has search

    west homepage - no header
    west subpage - blue header (action) / white logo / has search

    memorial north homepage - dark grey header / white logo / has search
    memorial west homepage  - dark grey header / white logo / has search
*/
const headerThemeStyles = props => {
    if(props.theme.is_memorial === true){
        return css`
                background-color: ${props.theme.theme_vars.colours.grey_darkest};
                border-bottom: none;
                color: ${props.theme.theme_vars.colours.white};
                `
    }
    switch (props.theme.cardinal_name){
        case "north":
            return css`
                background-color: ${props.theme.theme_vars.colours.white};
                border-bottom: ${props.theme.theme_vars.colours.action};
                color: ${props.theme.theme_vars.colours.black};
                `
            break;
        case "west":
            return css`
                background-color: ${props.theme.theme_vars.colours.action};
                border-bottom: none;
                color: ${props.theme.theme_vars.colours.white};
                `
            break;
    }
}

export const Container = styled.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    padding: 3px 0;
    ${headerThemeStyles}
`

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
`

const LogoStyles = `
    svg {
        width: 240px;
        height: auto;
        vertical-align: middle;
    }
    &.black_logo {
        svg {
            fill: black !important;
            path {
                fill: black !important;
            }
        }
    }
`
export const LogoColoured = styled.div`
    ${LogoStyles}
`
export const LogoWhite = styled.div`
    ${LogoStyles}
`
export const LogoWrapper = styled.div`
    display: inline-block;
    
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        flex-grow: 1;
        display: block;
    }
`
export const HomeLink = styled.a`
    display: inline-block;

    &:hover {
        opacity: 0.8;

        svg {
            opacity: 0.8;
        }
    }
    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`

export const AllServicesLink = styled.a`
    ${props => props.theme.linkStyles};
    color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white};
    padding: 0 ${props => props.theme.theme_vars.spacingSizes.small};
    vertical-align: middle;
    margin-top: -10px;

    &:hover {
        ${props => props.theme.linkStylesHover};
        color: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? props.theme.theme_vars.colours.action_dark : props.theme.theme_vars.colours.white};
        opacity: ${props => (props.isHomepage === "true" || props.theme.cardinal_name === "north") ? "1" : "0.8"};
    }
    &:focus {
        ${props => props.theme.linkStylesFocus};
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }

    display: inline-block;
    padding-bottom: 15px;
    padding-top: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: none;
        padding-bottom: 0px;
        padding-top: 0px;
        margin-top: 0px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: inline-block;
    }
`

export const SearchWrapper = styled.div`
    padding-bottom: ${props => props.theme.theme_vars.spacingSizes.small};
    flex: 0 0 100%;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        flex: auto;
        max-width: 320px;
        margin-left: 15px;
        padding: ${props => props.theme.theme_vars.spacingSizes.small} 2px;
    }
`