import styled from "styled-components";

export const Container = styled.div`
    font-family: ${props => props.theme.fontstack};
    color: ${props => props.theme.colours.black};
    margin-right: 15px;
    margin-left: 15px;
    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.breakpoints.m}){
        margin-right: 30px;
        margin-left: 30px;
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.31579;
    }

    @media screen and (min-width: calc(${props => props.theme.breakpoints.l} + 60px)){
        margin-right: auto;
        margin-left: auto;
        max-width: ${props => props.theme.breakpoints.l};
    }
`
