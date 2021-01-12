import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  max-height: 320px;
  overflow: hidden;

  &.open {
    max-height: none;
  }

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    max-height: none;
    margin-top: 30px;
  }
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
    line-height: 1.3;
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
    background: ${props => props.theme.theme_vars.colours.grey} !important;  
    margin-left: -15px;
  }

  &:last-of-type {
    margin-bottom: 0 !important;
  }
`

export const Quicklink = styled.a`
  ${props => props.theme.linkStyles}
  font-weight: 400 !important;
  text-decoration: none !important;

  &:hover {
    ${props => props.theme.linkStylesHover}
    text-decoration: underline !important;
    text-decoration-style: dotted !important;
  }
  &:focus {
    ${props => props.theme.linkStylesFocus}
  }
`
export const ViewMoreButtonContainer = styled.div`
  text-align: center;
  margin-top: 30px;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    display: none;
  }
`

export const ViewMoreButton = styled.button`
  padding: 0;
  border: none;
  background: none;
  ${props => props.theme.linkStyles}
  
  &:hover {
    cursor: pointer;
    ${props => props.theme.linkStylesHover}
  }
  &:focus {
    outline: none;
    ${props => props.theme.linkStylesFocus}
  }
`