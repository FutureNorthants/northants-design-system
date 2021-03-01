import styled from "styled-components";

export const Divider = styled.hr`
  display: block;
  width: 100%;
  height: 1px;
  margin: ${props => props.theme.theme_vars.spacingSizes.medium} 0;
  background-color: ${props => props.theme.theme_vars.colours.grey_dark};
  border: none;
`

