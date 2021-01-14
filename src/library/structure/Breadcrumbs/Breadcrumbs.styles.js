import styled from "styled-components";

export const Container = styled.div`
    margin-top: 20px;
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;
`

export const List = styled.ol`
    list-style: none;
    padding-left: 0px;
    margin-top: 0;
    display: none;
    margin-bottom: 20px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: block;
    }
`

export const Crumb = styled.li`
    display: inline;
    margin-right: 10px;
    &:last-of-type svg {
        display: none;
    }
`
export const IconWrapper = styled.div`
    display: inline-block;
    margin-left: 10px;
    vertical-align: middle;
`
export const MobileCrumb = styled.div`
    display: block;
    padding: 15px 0;
    margin-top: -15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: none;
    }
`
export const BackIconWrapper = styled.div`
    display: inline-block;
    margin-right: 10px;
    vertical-align: middle;
`
export const BreadcrumbLink = styled.a`
    ${props => props.theme.linkStyles}
    font-weight: 400;

    svg {
        fill: ${props => props.theme.theme_vars.colours.action};
    }

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