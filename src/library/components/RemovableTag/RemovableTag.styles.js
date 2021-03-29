import styled from "styled-components";

export const Wrapper = styled.div`
    vertical-align: middle;
    margin: 5px 0;
    display: inline-block;

    @media (max-width: 40.0525em) {
            vertical-align:baseline
    }




`

export const Preposition = styled.div`
    display: inline-block;
    vertical-align: middle;
    text-transform: lowercase;
    margin: 0 3px;
    font-size: 80%;
`

export const Container = styled.span`
    margin: 0 5px;
    display: inline-block;
    position: relative;
    border: 1px solid ${props => props.theme.theme_vars.colours.grey_darkest};
    border-radius: 5px;
    background-color: ${props => props.theme.theme_vars.colours.grey_light};
    padding: 3px 6px 3px 17px;
    font-size: 80%;

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
    text-align: left;
    cursor: pointer;
    color: #000;
    text-decoration: none;
    background: none;
    border: 0;
    display: inline-block;
    border: 1px solid transparent;
    font-size: 80%;
    line-height: 0.85;

  &:focus {
    -webkit-box-shadow: inset 0 0 0 2px;
    box-shadow: inset 0 0 0 2px;
    border: solid 1px ${props => props.theme.theme_vars.colours.grey_darkest};
    outline: 3px solid ${props => props.theme.theme_vars.colours.focus};
  }
`