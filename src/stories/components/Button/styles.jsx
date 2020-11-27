import styled from "styled-components";

export const StyledButton = styled.button`
    font-weight: 700;
    border: 0;
    cursor: pointer;
    display: inline-block;
    line-height: 1;
    font-family: ${props => props.theme.fontstack};
    border-radius: ${props => props.theme.borderRadius};

    &.button--primary {
        color: white;
        background-color: ${props => props.theme.colours.action};
    }
    &.button--secondary {
        color: #333;
        background-color: transparent;
        box-shadow: rgba(0, 0, 0, 0.15) 0px 0px 0px 1px inset;
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
