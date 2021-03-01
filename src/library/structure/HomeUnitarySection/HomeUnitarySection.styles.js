import styled from "styled-components";

export const Container = styled.div`
    
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
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 2;
        width: 33%;
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
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        order: 1;
        width: 33%;
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
        width: 33%;
        padding-left: 0px;

        svg {
            margin-bottom: 15px;
        }
    }
`
export const CouncilLink = styled.a`
    
`
