import styled from "styled-components";

export const StyledTextInput = styled.input`
    display: block;

    /* 100% of container minus padding and borders */
    width: calc(100% - ${props => props.isLarge? props.theme.theme_vars.spacingSizes.small : props.theme.theme_vars.spacingSizes.extra_small}
                     - ${props => props.isLarge? props.theme.theme_vars.spacingSizes.small : props.theme.theme_vars.spacingSizes.extra_small}
                     - ${props => props.theme.theme_vars.border_width}
                     - ${props => props.theme.theme_vars.border_width});

    ${props => props.theme.fontStyles}
    margin-top: 0 !important;
    margin-bottom: 0;
    padding: ${props => props.isLarge ? props.theme.theme_vars.spacingSizes.small : props.theme.theme_vars.spacingSizes.extra_small};
    border: solid ${props => props.isErrored ? props.theme.theme_vars.colours.negative : props.theme.theme_vars.colours.black};
    border-width: ${props => props.isErrored ? props.theme.theme_vars.border_width_error : props.theme.theme_vars.border_width};
    border-radius: ${props => props.isLarge ? props.theme.theme_vars.border_radius_large : props.theme.theme_vars.border_radius};

    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }
`