import {css} from "styled-components";

export const VisuallyHidden = css`
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

// const hideLabel = props => {
//   if(props.labelHidden === true) {
//     return VisuallyHidden;
//   }
// }


// export const Label = styled.label`
//     display: block;
//     margin-bottom: 5px;
//     ${hideLabel}
// `