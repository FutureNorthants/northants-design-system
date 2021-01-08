import styled from "styled-components";

export const Container = styled.main`
    padding-top: 30px;

    a {
        ${props => props.theme.linkStyles}
        &:hover{
            ${props => props.theme.linkStylesHover}
        }
        &:focus{
            ${props => props.theme.linkStylesFocus}
        }
    }

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
    .table_container {
        @media only screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
            max-width: 100%;
            overflow: scroll;
        }
    }
    table { 
        width: 100%; 
        border-collapse: collapse; 
        margin: 50px auto;
        max-width: 100%;
        overflow: scroll;

        caption {
            text-align: left;
            padding-left: 10px;
            margin-bottom: 15px;
            font-weight: bold;
        }
    }

    tr {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};
        &:hover {
            background: ${props => props.theme.theme_vars.colours.grey_light} !important; 
        }
    }

    tr:nth-of-type(even) { 
        background: ${props => props.theme.theme_vars.colours.grey_light}40; 
    }

    td, th { 
        padding: 10px; 
        text-align: left; 
    }
    th {
        font-weight: bold;
    }
    thead tr {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.black};
        &:hover {
            background: transparent !important; 
        }
    }


    @media only screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        table { 
            width: 100%; 
        }
    }
`
