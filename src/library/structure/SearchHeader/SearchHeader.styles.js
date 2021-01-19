import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  display: block;
`

export const Label = styled.label`
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    margin: 0 !important;
    padding: 0 !important;
    overflow: hidden !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: 0 !important;
    white-space: nowrap !important;
`


export const Search = styled.input`

    margin-top: 0;
    margin-bottom: 25px;
    padding: 5px;
    border: 0;
    border-radius: ${props => props.theme.theme_vars.border_radius};
    display: block;

    &:focus {
        outline: none;
        box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
        transition: box-shadow 0.3s ease 0s;
    }

`


export const Button = styled.button`
  background-color: ${props => props.theme.theme_vars.border_radius};
  background-image
`