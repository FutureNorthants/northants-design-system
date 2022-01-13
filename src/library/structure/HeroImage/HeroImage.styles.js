import styled from "styled-components";
import Heading from "../../components/Heading/Heading";

/**
 * Hero image container with optional dark gradient for non-box mode
 * Optimised for an image in 16:5 ratio on all but small width screens
 */
export const Container = styled.div`
  background-image: ${(props) =>
    !props.backgroundBox
      ? `linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),`
      : ``} url("${(props) => props.image}");
  
  /* phones */
  padding-top: 90%;
  /* everything else */
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.s}){
    padding-top: 31.25%;
  }
  padding-bottom: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
`;

/**
 * Overlay div containing the headline, text, link
 */
export const Overlay = styled.div`
  ${(props) => props.theme.fontStyles}
  text-align: left;
  position: absolute;
  bottom: 14%;
  left: 8%;
  padding: 25px 25px 0 25px;
  color: ${(props) =>
    props.backgroundBox
      ? props.theme.theme_vars.colours.black
      : props.theme.theme_vars.colours.white};
  background-color: ${(props) =>
    props.backgroundBox
      ? props.theme.theme_vars.colours.grey_light + "F2"
      : `transparent`};
  box-shadow: ${(props) =>
    props.backgroundBox
      ? `0px -4px 0px 0px ` + props.theme.theme_vars.colours.action + ` inset, 0px 4px 15px rgba(0, 0, 0, 0.11)`
      : `none`};

  border-radius: 5px;

  /* default - phones */
  max-width: 70%;

  /* tablets */
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    max-width: 50%;
  }

  /* desktop */
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    max-width: 35%;
  }
`;

export const Headline = styled(Heading)`
  margin: 0;
  color: ${(props) =>
    props.backgroundBox
      ? props.theme.theme_vars.colours.black
      : props.theme.theme_vars.colours.white};
  
  /* default - phones */
  font-size: 22px;

  /* tablets */
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.m}){
    font-size: 32px;
  }

  /* desktop */
  @media screen and (min-width: ${props => props.theme.theme_vars.breakpoints.l}){
    font-size: 44px;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  p, div {
    margin-bottom: 10px;
  }
`;

/**
 * In non-box mode the link is not a button, and includes a glow when hovering/focused
 */
export const CallToActionLink = styled.a`
  ${(props) => props.theme.fontStyles}
  text-decoration: underline;
  color: ${(props) => props.theme.theme_vars.colours.white} !important;
  width: 100%;
  padding: 0;
  margin-top: 10px;
  display: inline-block;
  outline: none;

  &:hover,
  &:focus {
    text-decoration-style: dotted;
    text-shadow: 2px 2px 4px rgba(150, 150, 150, 0.5),
      -2px 2px 4px rgba(150, 150, 150, 0.5),
      2px -2px 4px rgba(150, 150, 150, 0.5),
      -2px -2px 4px rgba(150, 150, 150, 0.5);
  }
  &:active {
    transform: translate(3px);
  }
`;
