import styled, {css} from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

/**
 * See header.tsx for colour rules
 * @param {*} props 
 * @returns 
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
                border-bottom: 5px solid ${props.theme.theme_vars.colours.action};
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
    overflow: visible;
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



const headerServicesLinkStyles = props => {
    if(props.theme.is_memorial === true){
        return css`
                color: ${props.theme.theme_vars.colours.white};
                &:hover {
                    color: ${props.theme.theme_vars.colours.white};
                    opacity: 0.8;
                }
                `
    }
    switch (props.theme.cardinal_name){
        case "north":
            return css`
                color: ${props.theme.theme_vars.colours.action};
                &:hover {
                    color: ${props.theme.theme_vars.colours.action_dark};
                    opacity: 1;
                }
                `
            break;
        case "west":
            return css`
                color: ${props.theme.theme_vars.colours.white};
                &:hover {
                    color: ${props.theme.theme_vars.colours.white};
                    opacity: 0.8;
                }
                `
            break;
    }
}
export const AllServicesLink = styled.a`
    ${props => props.theme.linkStyles};
    padding: 0 ${props => props.theme.theme_vars.spacingSizes.small};
    vertical-align: middle;
    margin-top: -10px;

    &:hover {
        ${props => props.theme.linkStylesHover};
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

    
    ${headerServicesLinkStyles}
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