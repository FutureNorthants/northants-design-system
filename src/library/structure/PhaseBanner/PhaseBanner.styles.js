import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
    margin-top: 15px;
    padding-bottom: 15px;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;

    font-family: ${props => props.theme.theme_vars.fontstack};
    color: ${props => props.theme.theme_vars.colours.black};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.2;

    a {
        ${props => props.theme.linkStyles}
        font-weight: 400;
        &:hover{
            ${props => props.theme.linkStylesHover}
        }
        &:focus{
            ${props => props.theme.linkStylesFocus}
        }
        &:active{
            ${props => props.theme.linkStylesActive}
        }
    }
        
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.45;

        p, h2, h3, h4 {
            max-width: 750px;
        }
    }
`

export const PhaseText = styled.span`
    vertical-align: middle;
    margin-top: 5px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        margin-top: 0;
    }
`

export const Phase = styled.div`
    font-weight: bold;
    padding: 5px 10px;
    margin-right: 10px;
    background: ${props => props.theme.theme_vars.colours.action}1A;
    float: left;
    margin-top: -3px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: inline-block;
        float: none;
        margin-right: 15px;
        margin-top: 0px;
        vertical-align: middle;
    }
`
