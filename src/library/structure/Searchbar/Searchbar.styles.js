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
  border-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  max-width: 750px;

  &:focus {
    outline: none;
  }

  
`


export const Input = styled.input`
  margin: 0;
  border: none;
  padding: 5px ${props => props.theme.theme_vars.spacingSizes.small};
  background: ${props => props.theme.theme_vars.colours.white};
  border-top-left-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  border-bottom-left-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  font-size: ${props => props.theme.theme_vars.fontSizes.small};
  border: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
  border-right: transparent;
  width: 100%;

  &:focus {
    outline: none;
    border: 1px solid ${props => props.theme.theme_vars.colours.focus} !important;
    box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
    -webkit-box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
    -moz-box-shadow: 0px 0px 0px 2px ${props => props.theme.theme_vars.colours.focus};
  }

  .is-light & {
    border-top: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-left: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-right: 0;
  }

  .is-large & { 
    padding: 10px 15px;
  }
`

export const Button = styled.button`
  cursor: pointer;
  margin: 0;
  padding: ${props => props.theme.theme_vars.spacingSizes.small} 12px;
  background: ${props => props.theme.theme_vars.colours.grey_darkest};
  color: ${props => props.theme.theme_vars.colours.white};
  border: 1px solid transparent;
  border-top-right-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  border-bottom-right-radius: calc(${props => props.theme.theme_vars.border_radius} * 2);
  width: 100%;
  text-align: center;

  &:hover {
    background: ${props => props.theme.theme_vars.colours.black};
  }

  .is-light & { 
    background: ${props => props.theme.theme_vars.colours.action};
    &:hover {
      background: ${props => props.theme.theme_vars.colours.action_dark};
    }
  }

  .is-large & { 
    padding: 10px 15px;
    padding-top: 12px;
  }

  &:focus {
    outline: none;
    background: ${props => props.theme.theme_vars.colours.focus};

    svg {
      path{
        fill: ${props => props.theme.theme_vars.colours.black};
      }
    }
  }
  &:active {
    transform: translateY(1px);
    background-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black};
    border-top-color: ${props => props.theme.theme_vars.colours.black};
    border-bottom-color: transparent;
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

