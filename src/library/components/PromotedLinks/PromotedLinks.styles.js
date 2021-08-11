import styled from "styled-components";

export const PromotedLinks = styled.div`
  ${props => props.theme.fontStyles}
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
    flex-direction: ${prop => prop.oneCol ? 'column' : 'inherit'};
`

export const PromotedLink = styled.a`
    display: block;
    @media screen and (min-width: calc(${props => props.theme.theme_vars.breakpoints.l} + 60px)){
        box-sizing: border-box;
    }
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

        margin-bottom: ${prop => prop.oneCol ? '20px' : '0px'};
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