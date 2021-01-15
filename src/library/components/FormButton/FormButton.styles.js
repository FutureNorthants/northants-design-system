import styled from "styled-components";

export const StyledButton = styled.button`
    font-weight: 700;
    border: none;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    text-decoration: none;

    &.button--primary {
        color: white;
        background-color: ${props => props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.theme.theme_vars.colours.action_dark};
        }
        &:focus {
            outline: none;
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
        &:active {
            transform: translateY(2px);
            color: ${props => props.theme.theme_vars.colours.black} !important;
            background-color: ${props => props.theme.theme_vars.colours.focus};
            box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
            -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
        }
    }
    &.button--secondary {
        color: ${props => props.theme.theme_vars.colours.action};
        background-color: transparent;
        border: 2px solid ${props => props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.theme.theme_vars.colours.action}1A;
        }
        &:focus {
            outline: none;
            border: 2px solid ${props => props.theme.theme_vars.colours.focus};
            background-color: ${props => props.theme.theme_vars.colours.action}1A;
        }
    }
    &.button--small {
        font-size: 12px;
        padding: 10px 16px;
    }
    &.button--medium {
        font-size: 14px;
        padding: 11px 20px;
    }
    &.button--large {
        font-size: 16px;
        padding: 12px 24px;
    }
`