import styled from 'styled-components';

export const Container = styled.div`
  ${(props) => props.theme.fontStyles};
`;

export const Title = styled.div`
  ${(props) => props.theme.linkStyles};
  display: block;
  margin-bottom: 15px;
  height: fit-content;
  font-size: 1.2rem;
  line-height: 1.2;
  min-width: 100%;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    font-size: 1.35rem;
    line-height: 1.3;
    max-width: 960px;
  }
`;

export const ArticleContainer = styled.a`
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
  overflow: hidden;
  text-decoration: none !important;
  font-weight: normal !important;
  width: 100%;

  &:hover {
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.action_dark};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .news-article-list__title {
      ${(props) => props.theme.linkStylesHover};
    }
  }

  &:focus {
    outline: none;
    border-bottom: 5px solid ${(props) => props.theme.theme_vars.colours.focus};
    box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -webkit-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;
    -moz-box-shadow: 0px 4px 18px rgba(0, 0, 0, 0.15) !important;

    .news-article-list__title {
      ${(props) => props.theme.linkStylesFocus};
    }
  }

  margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
`;

export const ArticleContent = styled.div`
  padding: 15px;

  ${(props) => props.theme.fontStyles};

  /* Tiny-width screens (at most 549px) */
  @media screen and (max-width: calc(${(props) => props.theme.theme_vars.breakpoints.s} - 1px)) {
    min-width: ${(props) => (props.$withImage ? '50%' : '100%')};
  }
  /* Small-width screens (at least 550px) */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    min-width: ${(props) => (props.$withImage ? '50%' : '100%')};
  }
  /* Medium-width screens (at least 1160px) */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: ${(props) => (props.$withImage ? '50%' : '100%')};
  }
  /* large-width screens (at least 1440px) */
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    width: ${(props) => (props.$withImage ? '66%' : '100%')};
  }
`;

export const ImageContainer = styled.span`
  display: block;
  width: 100%;
  height: auto;
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  justify-self: center;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    order: 1;
    height: auto;
    min-width: 180px;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    width: 50%;
  }
  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
    width: 33%;
  }
`;

export const DateContainer = styled.div`
  padding-top: 1em;
  margin-top: auto;
  p {
    margin-bottom: 0 !important;
    margin-top: 0 !important;
  }
`;

export const ResultInfo = styled.div`
  font-weight: bold;
  margin: ${(props) => props.theme.theme_vars.spacingSizes.large} 0;
`;
