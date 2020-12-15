import styled from "styled-components";

export const Container = styled.main`



    // TABLE STYLES
    table { 
        width: 750px; 
        border-collapse: collapse; 
        margin: 50px auto;
        max-width: 100%;
        overflow: scroll;

        caption {
            width: 100%;
            display: block;
            text-align: left;
            padding-left: 10px;
            font-size: 1.2em;
            margin-bottom: 15px;
        }
    }

    tr:nth-of-type(even) { 
        background: ${props => props.theme.theme_vars.colours.grey_light}; 
    }

    td, th { 
        padding: 10px; 
        border: 1px solid ${props => props.theme.theme_vars.colours.grey}; 
        text-align: left; 
        font-size: 18px;
    }
    th {
        background: ${props => props.theme.theme_vars.colours.action_dark}; 
        color: ${props => props.theme.theme_vars.colours.white}; 
    }


    @media only screen and (max-width: ${props => props.theme.theme_vars.breakpoints.m}){
        table { 
            width: 100%; 
        }

        table, thead, tbody, th, td, tr { 
            display: block; 
        }
        
        thead tr { 
            position: absolute;
            top: -9998px;
            left: -9998px;
        }
        
        tr { border: 1px solid ${props => props.theme.theme_vars.colours.grey}; }
        
        td, th { 
            border: none;
            position: relative;
        }
    }
`
