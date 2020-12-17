import styled from "styled-components";

export const Container = styled.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: left;
`
export const Form = styled.form`
    padding-top: 10px;
    padding-bottom: 12px;
    padding-left: ${props => props.hideLine ? "0" : "15px"};
`
export const Line = styled.div`
    background: ${props => props.isError ? props.theme.theme_vars.colours.negative : props.lineColour};
    display: ${props => props.hideLine ? "none" : "block"};
    width: 5px;
    border-radius: 2px;
`