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

            margin-right: ${props => props.sidebarLeft ? "0" : "30px"};
            margin-left: ${props => props.sidebarLeft ? "30px" : "0"};
        }
        aside {
            width: 33.33%;
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){  
        main {
            width: calc(66.66% - 45px);

            margin-right: ${props => props.sidebarLeft ? "0" : "45px"};
            margin-left: ${props => props.sidebarLeft ? "45px" : "0"};
        }
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.xl}){  
        main {
            width: calc(66.66% - 60px);
            
            margin-right: ${props => props.sidebarLeft ? "0" : "60px"};
            margin-left: ${props => props.sidebarLeft ? "60px" : "0"};
        }
    }
`
