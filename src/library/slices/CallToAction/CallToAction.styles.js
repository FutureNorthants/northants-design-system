import styled from "styled-components";

export const Container = styled.div`
    margin-bottom: 30px;
    display: block;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        display: inline-block;
        margin-right: 25px;
    }
`