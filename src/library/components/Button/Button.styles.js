import styled from "styled-components";

export const StyledButton = styled.a`
    font-weight: 700;
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${props => props.theme.theme_vars.fontstack};
    border-radius: ${props => props.theme.theme_vars.borderRadius};
    text-decoration: none;

    &.button--primary {
        color: white;
        background-color: ${props => props.theme.theme_vars.colours.action};

        &:hover {
            background-color: ${props => props.theme.theme_vars.colours.action_dark};
        }
        &:focus {
            outline: none;
            color: ${props => props.theme.theme_vars.colours.black};
            background-color: ${props => props.theme.theme_vars.colours.focus};
            border-bottom: 2px solid ${props => props.theme.theme_vars.colours.black};
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