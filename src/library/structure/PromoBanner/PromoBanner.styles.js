import styled from "styled-components";

export const Container = styled.div`
    overflow: hidden;
    margin: 40px auto;
    background: ${props => props.theme.cardinal_name === "north" ? props.theme.theme_vars.colours.white : props.theme.theme_vars.colours.grey_light};
    margin-left: -15px;    
    width: calc(100% + 30px);

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        margin: 60px auto;
        display: flex;
        -webkit-flex-direction: row;
        -moz-flex-direction: row;
        -ms-flex-direction: row;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;
        flex-wrap: wrap;
        margin-left: -30px;    
        width: calc(100% + 60px);
    }   
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
        margin-left: 0;
        width: 100%;
        border-radius: 5px;
    }
`
export const Image = styled.div`
    background-image: url("${props => props.img}");
    background-size: cover;
    background-position: center;
    min-height: 200px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: 50%;
        min-height: 300px;
    }

`
export const Wrapper = styled.div`
    width: calc(100% - 30px);
    padding: 15px;

    h2 {
        margin-top: 0;
    }
    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
        width: calc(50% - 60px);
        padding: 30px;
    }
`
export const Content = styled.div`
    
`
export const CTA = styled.a`
    margin-top: 10px;
    display: inline-block;
    padding: 3px 7px;
    margin-left: -7px;
`
