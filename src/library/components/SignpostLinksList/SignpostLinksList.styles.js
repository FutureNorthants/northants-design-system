import styled from "styled-components";

export const SignpostList = styled.ul`

    ${props => props.theme.fontStyles}
    margin: 0 !important;
    padding-left: 10px;
    margin-bottom: 20px !important;
    list-style-type: none;

    li:last-of-type {
        margin-bottom: 0;
    }
`
export const SignpostListItem = styled.li`
    margin-bottom: 10px;
    padding-left: 0 !important;

    &:before {
        content: none !important;
    }
`


export const SignpostLink = styled.a`
    ${props => props.theme.linkStyles}

    svg {
        fill: ${props => props.theme.theme_vars.colours.action};
    }

    &:hover{
        ${props => props.theme.linkStylesHover}
        svg {
            fill: ${props => props.theme.theme_vars.colours.action_darl};
        }
    }
    &:focus{
        ${props => props.theme.linkStylesFocus}
        svg {
            fill: ${props => props.theme.theme_vars.colours.black};
        }
    }
    &:active{
        ${props => props.theme.linkStylesActive}
    }
`

export const IconWrapper = styled.div`
    display: inline-block;
    margin-right: 10px;
    svg {
        vertical-align: middle;
    }
`
