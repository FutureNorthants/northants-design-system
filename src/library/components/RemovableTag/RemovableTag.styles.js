import styled from "styled-components";

export const Wrapper = styled.div`
    vertical-align: middle;
    margin: 5px 0;
    display: inline-block;

    @media (max-width: 40.0525em) {
            vertical-align:baseline
    }




`

export const Preposition = styled.span`

display: table-cell;
    padding: 0 5px 0 2px;
    vertical-align: middle;
    text-transform: lowercase;
`

export const Container = styled.span`
    margin: 0 5px;
    display: table-cell;
    position: relative;
    padding: 5px;
    border: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-radius: 5px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};
    padding: 8px 7px 7px 23px;

  @media (max-width: 40.0525em) {
      /* background: none; */
      border: 2px solid ${props => props.theme.theme_vars.colours.grey_darkest};
  }
`

export const Text = styled.span`
  display: block;
  display: inline-block;
  margin-left: 0;
  margin-left: 5px;
`

export const Button = styled.button`
    display: none;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 8px;
    border-radius: 5px;
    font-weight: bold;
    font-family: "nta",arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    font-weight: 700;
    font-size: 14px;
    line-height: 1.1428571429;
    text-align: left;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    background: none;
    border: 0;
    display: inline-block;
    border: 1px solid transparent;

    @media (min-width: 40.0625em) {
        font-size:16px;
        line-height: 1.25
    }

  &:focus {
    -webkit-box-shadow: inset 0 0 0 2px;
    box-shadow: inset 0 0 0 2px;
    border: solid 1px ${props => props.theme.theme_vars.colours.grey_darkest};
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
  }
`