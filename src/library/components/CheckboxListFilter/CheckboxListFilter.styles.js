import styled from "styled-components";
import {VisuallyHidden} from './../../helpers/style-helpers'

export const Container = styled.div`
${props => props.theme.fontStyles};
  margin-bottom: 30px;
`

export const Fieldset = styled.fieldset`
    min-width: 0;
    margin: 0;
    padding: 0;
    border: 0;

    &:after {
      content: "";
      display: block;
      clear: both;
    }
`

const hideLabel = props => {
  if(props.labelHidden === true) {
    return VisuallyHidden;
  }
}


export const Legend = styled.legend`
    color: #0b0c0c;
    -webkit-box-sizing: border-box;
    box-sizing: border-box;
    display: table;
    max-width: 100%;
    margin-bottom: 10px;
    padding: 0;
    white-space: normal;
    ${hideLabel}
`

const hideHint = props => {
  if(props.hintHidden === true) {
    return VisuallyHidden;
  }
}


export const Hint = styled.div`
    font-size: ${props => props.theme.theme_vars.fontSizes.small};
    display: block;
    margin-bottom: 15px;
    color: #505a5f;
    margin-top: -5px;
    ${hideHint}
`

export const Checkboxes = styled.div`
  display: block; 
  `



export const Checkbox = styled.div`
     
    font-size: ${props => props.theme.theme_vars.fontSizes.small};
    display: block;
    position: relative;
    min-height: 40px;
    margin-bottom: 10px;
    padding-left: 40px;
    clear: left;
  `

export const CheckboxInput = styled.input`
    cursor: pointer;
    position: absolute;
    z-index: 1;
    top: -2px;
    left: -2px;
    width: 44px;
    height: 44px;
    margin: 0;
    opacity: 0;
`

export const CheckboxLabel = styled.label`
    display: inline-block;
    margin-bottom: 0;
    padding: 8px 15px 5px;
    cursor: pointer;
    -ms-touch-action: manipulation;
    touch-action: manipulation;
    color: #0b0c0c;
    display: block;
    margin-bottom: 5px;


    &:before {
      content: "";
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      width: 40px;
      height: 40px;
      border: 2px solid currentColor;
      background: transparent;
    }


    &:after {
      content: "";
      -webkit-box-sizing: border-box;
      box-sizing: border-box;
      position: absolute;
      top: 11px;
      left: 9px;
      width: 23px;
      height: 12px;
      -webkit-transform: rotate(-45deg);
      -ms-transform: rotate(-45deg);
      transform: rotate(-45deg);
      border: solid;
      border-width: 0 0 5px 5px;
      border-top-color: transparent;
      opacity: ${props => props.isChecked ? 1 : 0};
      background: transparent;
    }
`