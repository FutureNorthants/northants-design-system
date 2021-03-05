import styled from "styled-components";

export const Container = styled.div`
    h2 {
        border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_dark};
        max-width: none;
        padding-bottom: 15px;
        margin-bottom: 20px;
    }
`

export const MapSection = styled.div`
    display: flex;
    -webkit-flex-direction: row;
    -moz-flex-direction: row;
    -ms-flex-direction: row;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;

    margin-top: 10px;
    margin-bottom: 45px;
`
export const Map = styled.div`
    width: 60%;
    order: -1;
    margin: 0 auto;
    text-align: center; 
    svg {
        width: 100%;
        max-width: 200px;
        height: auto;
    }
    @media screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        font-size: 0.8rem;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 2;
        width: calc(33.333% - 21px);
        max-width: none;

        svg {
            max-width: none;
        }
    }
`

export const West = styled.div`
    width: calc(50% - 10px);
    order: 1;
    padding-right: 10px;
    svg {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin-bottom: 5px;
    }
    @media screen and (max-width: ${props => props.theme.theme_vars.breakpoints.s}){
        font-size: 0.8rem;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 1;
        width: calc(33.333% - 21px);
        padding-right: 0px;

        svg {
            margin-bottom: 15px;
        }
    }
`

export const North = styled.div`
    width: calc(50% - 10px);
    order: 3;
    padding-left: 10px;

    svg {
        width: 100%;
        max-width: 300px;
        height: auto;
        margin-bottom: 5px;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: calc(33.333% - 21px);
        padding-left: 0px;

        svg {
            margin-bottom: 15px;
        }
    }
`
export const CouncilLink = styled.a`
    color: ${props => props.colour} !important;

    &:action, &:focus {
        color: ${props => props.theme.theme_vars.colours.black} !important;
    }
`
