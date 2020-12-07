import styled from "styled-components";
import MaxWidthContainer from '../MaxWidthContainer/MaxWidthContainer';

export const Container = styled.footer`
  background-color: ${props => props.theme.theme_vars.colours.black};
  padding: 25px 0;
  margin-top: 50px;
`
export const StyledMaxWidthContainer = styled(MaxWidthContainer)`
  color: ${props => props.theme.theme_vars.colours.white};
`
export const FooterList = styled.ul`
  padding: 0px;
  margin-bottom: 0px;
  list-style-type: none;

  li:last-of-type {
      margin-bottom: 0;
  }
`
export const FooterListItem = styled.li`
  display: inline-block;
  margin-right: 25px;
  margin-bottom: 15px;
`
export const FooterLink = styled.a`
  ${props => props.theme.linkStyles}
  color: ${props => props.theme.theme_vars.colours.white};
  font-weight: 400;

  &:hover{
      ${props => props.theme.linkStylesHover}
      color: ${props => props.theme.theme_vars.colours.white};
      opacity: 0.8;
    }
  &:focus{
      ${props => props.theme.linkStylesFocus}
  }
`
export const FooterCopy = styled.p`
  
`