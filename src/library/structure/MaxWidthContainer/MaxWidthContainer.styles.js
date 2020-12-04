import styled from "styled-components";

export const Container = styled.div`
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
