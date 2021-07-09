import styled, {css} from "styled-components";
import {VisuallyHidden} from '../../helpers/style-helpers'

export const Container = styled.div`  
  ${props => props.theme.fontStyles};
`

const hideLabel = props => {
  if(props.hideLabel === true) {
    return VisuallyHidden;
  }
}


export const Label = styled.label`
    display: block;
    margin-bottom: 5px;
    ${hideLabel}
`

export const Select = styled.select`

  ${props => props.theme.fontStyles};
  border-radius: ${props => props.theme.theme_vars.border_radius};
  box-sizing: border-box;
  max-width: 100%;
  height: 40px;
  height: 2.5rem;
  padding: 5px;
  border: 2px solid ${props => props.theme.theme_vars.colours.black};

  &:focus {
    outline: none;
    box-shadow: ${props => props.theme.theme_vars.colours.focus} 0 0 0 3px;
    transition: box-shadow 0.3s ease 0s;
  }
`

export const Option = styled.option`
  :active, :checked,:focus::-ms-value {
    color: #fff;
    background-color: #1d70b8
  }

`

