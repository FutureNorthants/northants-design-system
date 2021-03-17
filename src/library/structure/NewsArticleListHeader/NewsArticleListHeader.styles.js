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
/* border-top: 1px solid ${props => props.theme.theme_vars.colours.grey}; */
grid-column-start: span 2;
    /* display: none;

@media (min-width: 40.0625em) {
        display:block;
} */
`

export const FilterRow = styled.div`
    padding: 5px;

@media (min-width: 40.0625em) {
    &:nth-child(odd) {
        background-color:${props => props.theme.theme_vars.colours.grey_light}
    }
}

`

export const FilterTitle = styled.div`
  font-weight: bold;
  display: table-cell;
  padding: 0 5px 0 2px;
  vertical-align: middle;



`