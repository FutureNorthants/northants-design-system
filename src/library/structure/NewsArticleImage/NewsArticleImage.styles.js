import styled from "styled-components";

export const ImageContainer = styled.div`
    position: relative;
    margin-bottom: 25px;
`

export const StyledImage = styled.img`
    width: 100%;
    height: auto;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        max-width: 800px;
    }
`

export const Small = styled.small`
    text-align: center;
    color: ${props => props.theme.theme_vars.colours.gray_dark};
    font-size: 14px;
    font-size: 0.8rem;
    line-height: 1.3;
    margin: 0 auto;
    display: block;
    &:hover {
        cursor: default;
    }

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        font-size: 16px;
        font-size: 1rem;
        max-width: 800px;
        line-height: 1.4;
    }
`