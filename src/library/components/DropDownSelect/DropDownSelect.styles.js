import styled, {css} from "styled-components";
import {VisuallyHidden} from '../../helpers/style-helpers'

export const Container = styled.div`  
  ${props => props.theme.fontStyles};
`

const hideLabel = props => {
  if(props.labelHidden === true) {
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
  box-sizing: border-box;
  max-width: 100%;
  height: 40px;
  height: 2.5rem;
  padding: 5px;
  border: 2px solid #0b0c0c;

  &:focus {
    outline: 3px solid #fd0;
    outline-offset: 0;
    -webkit-box-shadow: inset 0 0 0 2px;
    box-shadow: inset 0 0 0 2px;
  }
`

export const Option = styled.option`
  :active, :checked,:focus::-ms-value {
    color: #fff;
    background-color: #1d70b8
  }

`

