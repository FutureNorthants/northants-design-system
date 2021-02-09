import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

export const Container = styled.div`
  ${props => props.theme.fontStyles}
  max-height: 385px;
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
    text-decoration: none;
    ${props => props.theme.linkStylesFocus}
    h2 {
      text-decoration: none;
    }
  }
  &:active{
    ${props => props.theme.linkStylesActive}
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
  &:active{
    ${props => props.theme.linkStylesActive}
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
  &:active{
    ${props => props.theme.linkStylesActive}
  }
`

export const IconWrapper = styled.div`
    display: inline-block;
    margin-right: 15px;
    padding-left: 3px;
    vertical-align: middle;
`

export const ReorderControl = styled.div`
  margin-top: 15px;
  margin-bottom: 10px;
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    text-align: right;
    margin-top: 0;
    margin-bottom: 25px;
  }
`
export const ReorderButton = styled.button`
  background: transparent;
  border: 2px solid ${props => props.theme.theme_vars.colours.action};
  box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  -webkit-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  -moz-box-shadow: 0px -2px 0px 0px ${props => props.theme.theme_vars.colours.action} inset;
  border-bottom: none;
  border-radius: ${props => props.theme.theme_vars.border_radius};
  margin-top: 10px;
  margin-right: 10px;
  padding: 5px 12px;
  line-height: 1.5;
  font-size: 0.9em;
  cursor: pointer;

  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    margin-left: 10px;
    margin-right: 0px;
  }

  &:hover {
    background: ${props => props.theme.theme_vars.colours.action_light};
  }

  &.chosen {
    cursor: default;
    borer: none;
    box-shadow: none;
    color: ${props => props.theme.theme_vars.colours.black};
    background: ${props => props.theme.theme_vars.colours.focus};
    border-color: ${props => props.theme.theme_vars.colours.focus};
    &:focus {
      outline: none;
    }
  }
  &:focus:not(.chosen) {
    outline: none;
    border-color: transparent;
    background: ${props => props.theme.theme_vars.colours.focus};
    color: ${props => props.theme.theme_vars.colours.black};
    border-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -3px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }
  &:active:not(.chosen) {
    transform: translateY(2px);
    border-color: transparent;
    background: ${props => props.theme.theme_vars.colours.focus};
    color: ${props => props.theme.theme_vars.colours.black};
    border-color: ${props => props.theme.theme_vars.colours.focus};
    box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -webkit-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
    -moz-box-shadow: 0px -1px 0px 0px ${props => props.theme.theme_vars.colours.black} inset;
  }
`