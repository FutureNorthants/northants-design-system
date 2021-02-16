import styled from "styled-components";

export const Container = styled.header`
    font-family: ${props => props.theme.theme_vars.fontstack};
    overflow: hidden;
    background-image: url("${props => props.image}");
    background-size: cover;
    background-repeat: no-repeat;
    background-position: center;
    padding 60px 0;

    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.theme_vars.breakpoints.xl};
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

export const MainBox = styled.div`
    margin-bottom: 60px;
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
        margin-top: -10px;
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
    
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
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


    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: 33%;
        margin-right: 30px;
        margin-bottom: 0px;
        padding: 30px;

        &:last-of-type {
            margin-right: 0;
        }
    }
`
