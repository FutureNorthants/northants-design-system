import styled from "styled-components";

export const Blockquote = styled.blockquote `
    ${props => props.theme.fontStyles}
    margin: 20px 0px;
    padding: 15px 0px 15px 40px;
    border-left: 5px solid ${props => props.theme.theme_vars.colours.action};
`

export const Quote = styled.q `
    color: ${props => props.theme.theme_vars.colours.black};
    display: block;
    font-weight: bold;
    font-size: 1.2em; 
    quotes: auto;

    &::before {
      content: open-quote;
    }

    &::after {
      content: close-quote;
    }
`



export const Citation = styled.cite `
      color: ${props => props.theme.theme_vars.colours.black};
      display: block;
      margin-top: 10px;
      line-height: 1.5;
      font-size: 1.05em;
      font-style: italic;
`