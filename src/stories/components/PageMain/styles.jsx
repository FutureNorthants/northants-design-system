import styled from "styled-components";

export const StyledPageMain = styled.main`
    font-family: ${props => props.theme.fontstack};
    margin-right: 15px;
    margin-left: 15px;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
    }

    @media screen and (min-width: calc(${props => props.theme.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.breakpoints.l};
    }
`
