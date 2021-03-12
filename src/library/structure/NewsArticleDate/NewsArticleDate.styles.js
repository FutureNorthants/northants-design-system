import styled from "styled-components";

export const NewsArticleDate = styled.p`
    color: ${props => props.theme.cardinal_name === "west" ? props.theme.theme_vars.colours.grey_darkest : props.theme.theme_vars.colours.grey_dark};
    margin-top: 15px;
    margin-bottom: 20px !important;
`
