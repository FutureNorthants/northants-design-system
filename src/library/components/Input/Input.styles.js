import styled from "styled-components";

export const StyledInput = styled.input`
    ${props => props.theme.fontStyles}
    margin-top: 0;
    margin-bottom: 25px;
    padding: 5px;
    border: 2px solid ${props => props.theme.theme_vars.colours.black};
    border-radius: ${props => props.theme.theme_vars.border_radius};
    display: block;

    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`