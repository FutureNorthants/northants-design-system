import styled from "styled-components";

export { SignpostLink } from '../../components/SignpostLinksList/SignpostLinksList.styles';


export const Container = styled.div`
    ${props => props.theme.fontStyles}
    max-width: 500px;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    padding: 20px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};


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
        max-width: calc(100% - 40px);
    }
`
export const Paragraph = styled.p`

`
export const LastParagraph = styled.p`
    margin-top: 25px;
    margin-bottom: 0;
`

