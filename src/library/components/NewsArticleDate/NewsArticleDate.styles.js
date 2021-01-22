import styled from "styled-components";

export const NewsArticleDate = styled.p`
    color: ${props => props.theme.theme_vars.colours.grey_dark};
    margin-top: 15px;
    margin-bottom: ${props => !props.withMargin ? "20px !important" : "50px !important"};
`
