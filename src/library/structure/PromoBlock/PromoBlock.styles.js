import styled from 'styled-components';
import Heading from '../../components/Heading/Heading';

const imageHeightMobile = 150;
const imageHeightDesktop = 200;

/**
 * Container for the 1-3 promo tiles
 */
export const PromoTilesContainer = styled.div`
  ${(props) => props.theme.fontStyles};
  padding: 15px 0;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    display: -ms-flex;
    display: -webkit-flex;
    display: flex;
    flex-wrap: wrap;
  }
`;

/**
 * A promo tile, containing image and text area
 */
export const PromoTile = styled.a`
  display: block;
  width: 100%;
  height: 100%;
  background: ${(props) =>
    props.theme.cardinal_name === 'north'
      ? props.theme.theme_vars.colours.white
      : props.theme.theme_vars.colours.grey_light} !important;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -webkit-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  -moz-box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08) !important;
  transition: box-shadow 0.3s ease;
  border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action};
  border-radius: ${(props) => props.theme.theme_vars.border_radius};
  margin-bottom: 15px;
  overflow: hidden;
  display: block;

  /* we don't want all the text within the tile to look like a link */
  text-decoration: none !important;
  font-weight: normal !important;
  ${(props) => props.theme.fontStyles};

  &:hover {
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
  }

  &:active {
    outline: none;
    transform: translateY(3px);
    border-bottom: 5px solid transparent;
    box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15), 0px 2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} !important;
    -webkit-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} !important;
    -moz-box-shadow: 0px 2px 10px rgba(0, 0, 0, 0.15),
      0px 2px 0px 0px ${(props) => props.theme.theme_vars.colours.black} !important;
  }
`;

/**
 * Image area of promo tile
 */
export const PromoImage = styled.span`
  display: block;
  width: 100%;
  /* height: ${imageHeightMobile}px; */
  overflow: hidden;
  padding-top: 56.25%;
  /* background-image: url('${(props) => props.$background}');
  background-size: cover;
  background-position: center; */
  justify-self: center;
  position: relative;

  /* @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    min-height: ${imageHeightDesktop}px;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    flex: none;
    height: ${imageHeightDesktop}px;
  } */
`;

/**
 * The non-image area of promo tile
 */
export const PromoText = styled.div`
  padding: 15px;
  height: calc(100% - ${imageHeightMobile + 30}px);
  ${(props) => props.theme.fontStyles};

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    height: calc(100% - ${imageHeightDesktop + 30}px);
  }
`;

/**
 * The headline of the tile
 */
export const PromoHeadline = styled(Heading)`
  margin-top: 5px;
`;

/**
 * Text body between header and call to action link
 */
export const PromoContent = styled.div`
  ${(props) => props.theme.fontStyles};

  /* re-style bold and italic elements within the content */
  strong,
  b {
    font-weight: bold;
  }
  em,
  i {
    font-style: italic;
  }

  /* style links within the content correctly though ideally there won't be any */
  a {
    ${(props) => props.theme.linkStyles};
  }
  a:hover {
    ${(props) => props.theme.linkStylesHover};
  }
  a:focus {
    ${(props) => props.theme.linkStylesFocus};
  }
  a:active {
    ${(props) => props.theme.linkStylesActive};
  }
`;

/**
 * The call to action text below the content; uses appropriate link styles from
 * the theme, but also varies appearance depending on parent PromoContainer's state.
 * Not using an actual <a> element as the whole promo tile is within one.
 */
export const PromoCallToAction = styled.p`
  margin-top: 10px;
  padding: 3px 7px;
  margin-left: -7px;
  ${(props) => props.theme.linkStyles};
  ${PromoTile}:hover & {
    ${(props) => props.theme.linkStylesHover};
  }
  ${PromoTile}:focus & {
    ${(props) => props.theme.linkStylesFocus};
  }
  ${PromoTile}:active & {
    ${(props) => props.theme.linkStylesActive};
  }
`;
