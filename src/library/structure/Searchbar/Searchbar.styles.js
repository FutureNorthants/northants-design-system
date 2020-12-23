import styled from "styled-components";

const spacing = `15px`;

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  width: 100%;
`

export const Form = styled.form`
`

export const Search = styled.div`

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


export const InputWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr minmax(33px, auto);
  /* justify-content: flex-start; */
  position: relative;
  width: auto;
  border: 3px solid transparent;
  border-radius: ${props => props.theme.theme_vars.border_radius};

  &:focus {
    outline: none;
  }

  &:focus-within {
    border: 3px solid ${props => props.theme.theme_vars.colours.focus};
    background-color: ${props => props.theme.theme_vars.colours.focus};
  }
`


export const Input = styled.input`
  margin: 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  background: ${props => props.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-left-radius: ${props => props.theme.theme_vars.border_radius};
  border-bottom-left-radius: ${props => props.theme.theme_vars.border_radius};
  font-size: ${props => props.theme.theme_vars.fontSizes.small};
  width: 100%;

  &:focus {
    outline: none;
  }

  .is-light & {
    border-top: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-left: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-right: 0;
  }

  .is-large & { 
    padding: ${props => props.theme.theme_vars.spacingSizes.medium};
  }
`

export const Button = styled.button`
  margin: 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small};
  background: ${props => props.theme.theme_vars.colours.grey_darkest};
  color: ${props => props.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: ${props => props.theme.theme_vars.border_radius};
  border-bottom-right-radius: ${props => props.theme.theme_vars.border_radius};
  width: 100%;
  text-align: center;

  &:focus {
    outline: none;
  }

  &:hover {
    background: ${props => props.theme.theme_vars.colours.black};
  }

  .is-light & { 
    background: ${props => props.theme.theme_vars.colours.action};
  }

  .is-large & { 
    padding: ${props => props.theme.theme_vars.spacingSizes.medium};
  }
`

export const ButtonText = styled.span`
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

