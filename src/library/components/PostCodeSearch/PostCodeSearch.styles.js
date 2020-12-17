import styled from "styled-components";

export const Container = styled.div`
    
`

export const DropDownButton = styled.button`
    background: transparent;
    border: 0;    
    ${props => props.theme.linkStyles}
    font-weight: 400;
    padding-left: 0;

    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.45;
    }

    &:hover{
        ${props => props.theme.linkStylesHover}
        cursor: pointer;
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
`

export const DropDownContent = styled.div`
    margin-top: 10px;
    
    input {
        margin-top: 15px;
    }
`

export const Label = styled.label`
    margin-bottom: 5px;
    display: block;
`