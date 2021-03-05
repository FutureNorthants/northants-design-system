import styled from "styled-components";

export const Outer = styled.div`
   ${props => props.theme.fontStyles}
    max-width: 725px;
    &:not(:first-child) {
        a {
            margin-top: 30px;
            &:before {
                content: "";
                height: 1px;
                width: 100%;
                position: absolute;
                left: 0;
                top: -15px;
                background: ${props => props.theme.theme_vars.colours.grey_dark}80;
            }
        }
   }
`
export const Link = styled.a`
    margin-bottom: 15px;
    display: block;
    width: fit-content;
    position: relative;
    min-width: 300px;

    svg {
        margin-right: 10px;
        vertical-align: top;
        margin-left: 5px;
        margin-top: 5px;
        g {
            fill: ${props => props.theme.theme_vars.colours.grey_dark};
        }
    }

    &:hover {
        .file-title {
            color: ${props => props.theme.theme_vars.colours.action};
        }
        .file-details {
            transform: translate(3px, 0px);   
        }
        svg {
            g {
                fill: ${props => props.theme.theme_vars.colours.action};
            }
        }
    }

    &:focus {
        outline: none;
        background: ${props => props.theme.theme_vars.colours.focus};
        box-shadow: 0px 0px 0px 3px ${props => props.theme.theme_vars.colours.focus}, 0px 3px 0px 3px ${props => props.theme.theme_vars.colours.black};
        svg {
            g {
                fill: ${props => props.theme.theme_vars.colours.black};
            }
        }
    }
    &:active {
        transform: translateY(2px);   
        box-shadow: 0px 0px 0px 3px ${props => props.theme.theme_vars.colours.focus}, 0px 1px 0px 3px ${props => props.theme.theme_vars.colours.black};
    }
`

export const FileDetails= styled.div`
    display: inline-block;
    max-width: calc(100% - 45px);
    transition: transform 0.3s;
`
export const Title = styled.span`
    display: block;
    color: ${props => props.theme.theme_vars.colours.action};
    font-weight: 700;
    
`
export const Type = styled.span`
    color: ${props => props.theme.theme_vars.colours.black};
    margin-right: 5px;
    font-weight: 400 !important;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
`
export const Size = styled.span`
    color: ${props => props.theme.theme_vars.colours.black}80;
    font-size: ${props => props.theme.theme_vars.fontSizes.extra_small};
    font-weight: 400 !important;
`