import styled from "styled-components";

export const Container = styled.div`
    
`
export const IconWrapper = styled.div`
    display: inline-block;
    margin-right: 15px;
    padding-left: 3px;
`
export const DropDownButton = styled.button`
    background: transparent;
    border: 0;    
    ${props => props.theme.linkStyles}
    font-weight: 400;
    padding-left: 0;
    color: ${props => props.theme.theme_vars.colours.black};
    text-align: left;
    
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
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`

export const DropDownContent = styled.div`
    margin-top: 10px;
    
    input {
        margin-top: 15px;
        margin-bottom: 15px;
    }
`

export const Label = styled.label`
    margin-bottom: 5px;
    display: block;
`

export const PostcodeResult = styled.div`
    margin-top: 15px;

    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    align-items: left;

    .result {
        padding-left: 15px;
        padding-top: 10px;
        padding-bottom: 12px;
    }
`
export const Line = styled.div`
    background: ${props => props.theme.theme_vars.colours.grey_dark};
    width: 5px;
    border-radius: 2px;
`

export const StartAgain = styled.button`
    background: transparent;
    border: 0;    
    margin-top: 15px;
    ${props => props.theme.linkStyles}
    &:hover{
        ${props => props.theme.linkStylesHover}
        cursor: pointer;
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }

    font-size: 16px;
    font-size: 1rem;
    line-height: 1.25;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 19px;
        font-size: 1.1875rem;
        line-height: 1.45;
    }
`