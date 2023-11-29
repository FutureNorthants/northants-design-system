import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';

/**
 * Hero image container with optional dark gradient for non-box mode
 * Optimised for an image in 16:5 ratio on all but small width screens
 */
export const Container = styled.div`
  background-image: ${(props) =>
      !props.$backgroundBox ? `linear-gradient(to bottom left, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.75)),` : ``}
    url('${(props) => props.$image}');

  padding-bottom: 10px;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  flex-direction: row;
  align-items: flex-end;

  &::before {
    content: '';
    /* phones */
    padding-top: 90%;
    /* tablet */
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      padding-top: 40%;
    }
    /* everything else */
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
      padding-top: 31.25%;
    }
  }
`;

export const InnerContainer = styled.div`
  max-width: 100%;
  margin-right: auto;
  margin-left: auto;
  flex-grow: 1;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    max-width: ${(props) => props.theme.theme_vars.breakpoints.l};
  }
`;

/**
 * Overlay div containing the headline, text, link
 */
export const Overlay = styled.div`
  ${(props) => props.theme.fontStyles}
  text-align: left;
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  margin-left: 15px;
  margin-right: 15px;
  padding: 25px 25px 0 25px;
  color: ${(props) =>
    props.$backgroundBox ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};
  background-color: ${(props) =>
    props.$backgroundBox ? props.theme.theme_vars.colours.grey_light + 'F2' : `transparent`};
  box-shadow: ${(props) =>
    props.$backgroundBox
      ? `0px -4px 0px 0px ` + props.theme.theme_vars.colours.action + ` inset, 0px 4px 15px rgba(0, 0, 0, 0.11)`
      : `none`};

  border-radius: 5px;
  overflow: hidden;

  /* default - phones */
  max-width: calc(100% - 30px);

  /* tablets */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    max-width: 65%;
    margin-left: ${(props) => props.theme.theme_vars.spacingSizes.large};
    margin-right: 0;
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
  }

  /* desktop */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    max-width: 50%;
    margin-left: 0;
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.x_large};
  }
`;

export const Headline = styled(Heading)`
  margin: 0;
  color: ${(props) =>
    props.$backgroundBox ? props.theme.theme_vars.colours.black : props.theme.theme_vars.colours.white};

  /* default - phones */
  font-size: 22px;

  /* tablets */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 32px;
  }

  /* desktop */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    font-size: 44px;
  }
`;

export const Content = styled.div`
  margin-top: 10px;
  p,
  div {
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
    text-shadow: 2px 2px 4px rgba(150, 150, 150, 0.5), -2px 2px 4px rgba(150, 150, 150, 0.5),
      2px -2px 4px rgba(150, 150, 150, 0.5), -2px -2px 4px rgba(150, 150, 150, 0.5);
  }
  &:active {
    transform: translate(3px);
  }
`;

export const BreadcrumbLink = styled.a`
  ${(props) => props.theme.fontStyles}
  ${(props) => props.theme.linkStyles}
  color: ${(props) =>
    props.$backgroundBox ? props.theme.theme_vars.colours.action : props.theme.theme_vars.colours.white};
  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
  display: block;

  &:hover,
  &:focus {
    text-decoration-style: dashed;
    text-shadow: ${(props) =>
      props.$backgroundBox
        ? 'none'
        : `2px 2px 4px rgba(150, 150, 150, 0.5), -2px 2px 4px rgba(150, 150, 150, 0.5),
      2px -2px 4px rgba(150, 150, 150, 0.5), -2px -2px 4px rgba(150, 150, 150, 0.5)`};
  }
`;

export const Search = styled.div`
  margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
`;
