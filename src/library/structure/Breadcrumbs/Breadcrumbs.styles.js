import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
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
    &:after{
        // TODO: replace this with a nicer icon
        margin: 0px 10px;
        content: ">";
        color: ${props => props.theme.theme_vars.colours.grey};
    }
    &:last-of-type:after{
        display: none;
    }
`
export const MobileCrumb = styled.div`
    display: block;
    padding: 15px 0;
    margin-top: -15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        display: none;
    }
`

export const BreadcrumbLink = styled.a`
    ${props => props.theme.linkStyles}
    font-weight: 400;

    &:hover{
        ${props => props.theme.linkStylesHover}
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
`