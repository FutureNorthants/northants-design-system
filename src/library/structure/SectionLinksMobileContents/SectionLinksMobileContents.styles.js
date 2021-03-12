import styled from "styled-components";

export const Container = styled.aside`
    padding-top: 20px;
    display: block;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: none;
    }
`
export const Contents = styled.nav`
`
export const ContentsList = styled.ul`
    margin-top: 10px !important;
    margin-left: 0 !important;
    margin-bottom: 20px;
    list-style-type: none;

    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
`
export const ContentsTitle = styled.h2`
    font-weight: 400;
    font-size: 14px;
    line-height: 1.5;
    margin: 0;
`

export const ContentsItem = styled.li`
    position: relative;
    margin-bottom: 10px !important;
    padding-left: 25px;
    
    &:before {
        content: "—" !important;
        position: absolute !important;
        left: 0 !important;
        width: 20px !important;
        overflow: hidden !important;
        background: transparent !important;
        height: auto !important;
        width: auto !important;
        border-radius: none !important;
        top: 0 !important;
    }
`
export const InlineLink = styled.a`
    ${props => props.theme.linkStyles}
    font-weight: 400;

    &:hover{
        ${props => props.theme.linkStylesHover}
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`