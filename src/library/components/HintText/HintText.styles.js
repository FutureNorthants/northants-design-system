import styled from "styled-components";

export const HintText = styled.p`
    color: ${props => props.theme.theme_vars.colours.grey_dark};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.1;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 18px;
        font-size: 1rem;
        line-height: 1.25;
    }
`
