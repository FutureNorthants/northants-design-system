import styled from "styled-components";

export const Container = styled.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    overflow: hidden;
    background: ${props => props.theme.theme_vars.colours.action}5A;
    padding 30px 0;
    padding-bottom: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        background-image: url("${props => props.image}");
        background-size: cover;
        background-repeat: no-repeat;
        background-position: center;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding 60px 0;
    }
    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        padding 90px 0;
        max-width: 1680px;
    }
`

export const StyledMaxWidthContainer = styled.div`
    ${props => props.theme.fontStyles}
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.l};
    }
`
export const HiddenH1 = styled.h1`
    visibility: hidden;
`

export const MainBox = styled.div`
    padding: 30px;
    background: ${props => props.theme.theme_vars.colours.white};
    background: ${props => props.theme.theme_vars.colours.white}F2;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.11);
    border-radius: 5px;


    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: calc(50% - 60px);
    }
`

export const Topline = styled.p`
    color: ${props => props.theme.theme_vars.colours.grey_dark};
`

export const LogoColoured = styled.div`
    svg {
        margin-top: -45px;
        max-width: 450px;
        width: 95%;
        height: auto;
    }
`

export const Strapline = styled.p`
    margin-bottom: 20px;
    margin-top: -10px;
`



export const PromotedLinks = styled.div`
    margin-top: 30px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: -ms-flex;
        display: -webkit-flex;
        display: flex;
        flex-wrap: wrap;
        margin-top: 60px;
    }
    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-top: 90px;
    }
`

export const PromotedLink = styled.a`
    display: block;
    background: ${props => props.theme.theme_vars.colours.white};
    background: ${props => props.theme.theme_vars.colours.white}F2;
    border-radius: 3px;
    box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.action} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    
    padding: 20px 15px;
    width: calc(100% - 30px);
    margin-bottom: 15px;

    span {
        ${props => props.theme.linkStyles};
    }

    &:hover {
        background: ${props => props.theme.theme_vars.colours.white};
    }

    &:focus {
        ${props => props.theme.linkStylesFocus};
        box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -4px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }
    &:active {
        ${props => props.theme.linkStylesActive};
        transform: translateY(3px);
        box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
        -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset, 0px 4px 15px rgba(0, 0, 0, 0.11);
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        width: 100%;
        margin-right: 15px;
        flex: 0 0 calc(50% - 38px);
        &:nth-of-type(2n) {
            margin-right: 0;
        }
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: 100%;
        margin-right: 30px;
        margin-bottom: 0px;
        padding: 30px;
        flex: 1;

        &:nth-of-type(2n) {
            margin-right: 30px;
        }
        &:last-of-type {
            margin-right: 0;
        }
    }
    
`
