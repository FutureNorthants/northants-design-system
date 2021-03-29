import styled from "styled-components";

export const NewsArticleOldBanner = styled.div`
    color: ${props => props.theme.theme_vars.colours.black};
    background: ${props => props.theme.theme_vars.colours.focus};
    padding: 5px 10px;
    padding-left: 15px;
    margin-bottom: 0px;
    width: calc(100% + 5px);
    margin-left: -15px;
    margin-bottom: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        padding: 5px 10px;
        margin-left: 0px;
        width: 100%;
        max-width: 380px;
        margin-bottom: 25px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: 420px;
    }
`
