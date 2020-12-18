import styled from "styled-components";

export const Container = styled.main`
    padding-top: 30px;

    p {
        margin-bottom: 15px;
    }
    strong, bold {
        font-weight: 700;
    }
    em {
        font-style: italic;
    }

    ul, ol {
        margin: 20px 0 20px 20px;

        li {
            margin-bottom: 5px;
        }
    }
    ul li {
        padding-left: 25px;
        position: relative;
        &:before {
            content: "";
            width: 7px;
            height: 7px;
            background: ${props => props.theme.theme_vars.colours.black};
            border-radius: 100%;
            position: absolute;
            left: 0;
            top: 10px;
        }
    }
    ol {
        list-style-type: decimal;
        padding-left: 10px;
        li {
            padding-left: 10px;
        }
    }

    sub, sup {
        font-size: 75%;
        line-height: 0;
        position: relative;
        vertical-align: baseline;
    }
    sup {
        top: -.5em;
    }
    sub {
        bottom: -.25em;
    }

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
