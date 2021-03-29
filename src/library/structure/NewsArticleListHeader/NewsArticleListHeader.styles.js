import styled from "styled-components";

export const Container = styled.div`
${props => props.theme.fontStyles};
padding-bottom: 20px;
border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey};
display: grid;
grid-template-columns: 1fr 1fr;
margin-bottom: 20px;
`

export const LeftCol = styled.div`
  display: block;
  align-self: end;
  font-weight: bold;
`

export const RightCol = styled.div`
  display: block;
  text-align: right;
`

export const Filters = styled.div`
  margin-top: 20px;
  grid-column-start: span 2;
`

export const FilterRow = styled.div`
  padding: 5px;
  border-bottom: 1px solid ${props => props.theme.theme_vars.colours.grey}80;

  &:last-of-type {
    border-bottom: none;
  }
`

export const FilterTitle = styled.div`
  font-weight: bold;
  vertical-align: middle;
  display: inline-block;
  margin-right: 5px;
  font-size: 80%;
`