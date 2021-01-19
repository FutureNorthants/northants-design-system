import styled from "styled-components";

export const Container = styled.div`
  ${props => props.theme.fontStyles};
  display: block;
  border-top: 1px solid ${props => props.theme.theme_vars.colours.grey};
  padding-top: ${props => props.theme.theme_vars.spacingSizes.small};
  
`

export const Previous = styled.a`
  ${props => props.theme.linkStyles};
  display: inline-block;
`

export const Next = styled.a`
  ${props => props.theme.linkStyles};
`

export const NumbersContainer = styled.ul`
  margin: 0;
  padding: 0;
  display: inline-block;
`

export const NumberContainer = styled.li`
  display: inline-block;
`


export const Number = styled.a`
  ${props => props.theme.linkStyles};
  text-decoration: ${props => props.isCurrent ? 'none' : 'underline'};
  font-weight: ${props => props.isCurrent ? 'normal' : '700'};
  padding: ${props => props.theme.theme_vars.spacingSizes.small};

   &:focus {
      outline: none;
      color: ${props => props.theme.theme_vars.colours.black} !important;
      background-color: ${props => props.theme.theme_vars.colours.focus};
      box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
      -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
      -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }

`

export const VisuallyHidden = styled.span`
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