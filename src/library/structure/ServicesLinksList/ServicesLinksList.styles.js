import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  margin-top: 30px;
`

export const LinksList = styled.div`
  display: flex;
  -webkit-flex-direction: row;
  -moz-flex-direction: row;
  -ms-flex-direction: row;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
`

export const PagelinkBlank = styled.div`
  display: none;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    display: block;
    padding: 15px;
    width: calc(33.333% - 21px);
    margin-bottom: 31px;
  }
`

export const PagelinkBlock = styled.div`
  width: 100%;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    width: calc(50% - 16px);
    margin-bottom: 31px;
  }
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    width: calc(33.333% - 21px);
  }
`
export const ServiceTitle = styled(Heading)`
  margin: 0;

  font-size: 24px;
  font-size: 1.3rem;
  line-height: 1.4;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    font-size: 36px;
    font-size: 1.5rem;
    line-height: 1.11111;
  }
`
export const ServiceTitleLink = styled.a`
  display: block;
  padding: 15px 0;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){  
    display: inline-block;
    padding: 0;
    margin-bottom: 15px;
  }

  &:hover {
    text-decoration: none;
  }
  h2 {
    ${props => props.theme.linkStyles}
  }
  &:hover {
    h2 {
      ${props => props.theme.linkStylesHover}
    }
  }
  &:focus {
    outline: none;
    h2 {
      ${props => props.theme.linkStylesFocus}
    }
  }
`

export const QuicklinkList = styled.ul`
  display: none;
  margin: 0 !important;
  padding: 0 !important;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: block;
    padding-left: 20px !important;
  }
`

export const QuicklinkItem = styled.li`
  margin-bottom: 10px;
  padding: 0 !important;
  &:before {
    content: none !important;
  }

  &:last-of-type {
    margin-bottom: 0 !important;
  }
`

export const Quicklink = styled.a`
  ${props => props.theme.linkStyles}
  font-weight: 400;

  &:hover {
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
`
