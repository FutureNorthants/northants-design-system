import styled from "styled-components";

export const WarningText = styled.div`
  max-width: 750px;
  margin: 20px 0px;
  margin-top: 65px;
  padding: 25px;
  padding-top: 0;
  background: ${props => props.theme.theme_vars.colours.secondary}80;

  a {
    color: ${props => props.theme.theme_vars.colours.black} !important;
  }
`

export const Title = styled.div`
  background: ${props => props.theme.theme_vars.colours.secondary};
  position: relative;
  margin-left: -25px;
  margin-bottom: 0;
  top: -20px;
  display: inline-block;
  padding: 8px 25px;
  font-weight: 600;
  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.25;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
      font-size: 36px;
      font-size: 1.5rem;
      max-width: 960px;
  }
`
export const Content = styled.div``