import styled from "styled-components";

export const Container = styled.div`
    ${props => props.theme.fontStyles}
    max-width: 500px;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    padding: 20px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};

    p:last-of-type {
        margin-top: 30px;
        margin-bottom: 0;
    }
    p:first-of-type {
        margin-top: 0;
        margin-bottom: 15px;
    }

    width: 100%;
    margin-left: -15px;
    padding: 15px;

    @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
        margin-left: 0;
        padding: 20px;
    }
`
export const Paragraph = styled.p`

`
export const SignpostList = styled.ul`
    padding-left: 10px;
    margin-bottom: 0;
    list-style-type: none;

    li:last-of-type {
        margin-bottom: 0;
    }
`
export const SignpostListItem = styled.li`
    margin-bottom: 10px;
`
export const SignpostLink = styled.a`
    ${props => props.theme.linkStyles}

    &:hover{
        ${props => props.theme.linkStylesHover}
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
    }
`
