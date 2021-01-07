import styled from "styled-components";

export const Container = styled.div`
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){  
        display: flex;
        flex-wrap: wrap;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;

        main {
            width: calc(66.66% - 30px);
            margin-right: 30px;
        }
        aside {
            width: 33.33%;
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){  
        main {
            width: calc(66.66% - 45px);
            margin-right: 45px;
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.xl}){  
        main {
            width: calc(66.66% - 60px);
            margin-right: 60px;
        }
    }
`
