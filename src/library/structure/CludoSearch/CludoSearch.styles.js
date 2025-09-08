import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  a {
    text-decoration: none !important;
    font-weight: normal !important;

    b {
      font-weight: bold !important;
    }
  }

  .wnc-cludo-input {
    padding-left: 0;
    padding-right: 0;
    display: flex;
    flex-direction: row;
  }

  .wnc-cludo-input input {
    padding: 10px;
    min-height: 44px;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 6px 0 0 6px;
    flex-grow: 1;
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
  }

  .wnc-cludo-input input:focus,
  .wnc-cludo-input input:active {
    outline: none;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 6px 0 0 6px;
    box-shadow: 0 0 0 2px #e2ca76, 0 0 0 4px #000;
  }

  .wnc-cludo-input button {
    height: 46px;
    width: 46px;
    margin-left: 0;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 0 6px 6px 0;
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    cursor: pointer;

    &:hover {
      background-color: ${(props) => props.theme.theme_vars.colours.action_dark};
    }
    &:focus,
    &:active {
      outline: none;
      background-color: ${(props) => props.theme.theme_vars.colours.focus};
      box-shadow: 0 0 0 2px ${(props) => props.theme.theme_vars.colours.focus},
        0 0 0 4px ${(props) => props.theme.theme_vars.colours.black};
      svg path {
        fill: ${(props) => props.theme.theme_vars.colours.black} !important;
      }
    }

    svg {
      width: 20px;
      height: 20px;
    }
  }

  .wnc-cludo-did-you-mean {
    display: block;
    margin: ${(props) => props.theme.theme_vars.spacingSizes.medium} 0;
  }

  .wnc-cludo-facet-list {
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
    @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
      margin-bottom: 0;
    }

    h3 {
      ${(props) => props.theme.theme_vars.h3};
      margin-top: 0;
    }
  }

  .wnc-cludo-facet-list ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    margin: 0;

    li {
      padding-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
      left: 0;
      line-height: 1.5;

      a {
        border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
        border-radius: ${(props) => props.theme.theme_vars.border_radius};
        padding: ${(props) =>
          `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
        color: ${(props) => props.theme.theme_vars.colours.action};
        font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};

        &:hover {
          text-decoration: underline !important;
          text-decoration-style: dotted !important;
        }

        &.cludo-active {
          background-color: ${(props) => props.theme.theme_vars.colours.action};
          color: ${(props) => props.theme.theme_vars.colours.white};
        }
        .cludo-theme-facet-count {
          &:before {
            content: '(';
          }
          &:after {
            content: ')';
          }
        }
      }
    }
  }

  .wnc-cludo-clear-facets {
    border: 2px solid ${(props) => props.theme.theme_vars.colours.action};
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    padding: ${(props) =>
      `${props.theme.theme_vars.spacingSizes.extra_small} ${props.theme.theme_vars.spacingSizes.small}`};
    color: ${(props) => props.theme.theme_vars.colours.action};
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
    cursor: pointer;
    background-color: ${(props) => props.theme.theme_vars.colours.white};
    line-height: 1.5;

    &:hover {
      text-decoration: underline !important;
      text-decoration-style: dotted !important;
    }

    &:focus {
      ${(props) => props.theme.linkStylesFocus};
    }

    &:active {
      ${(props) => props.theme.linkStylesActive};
    }
  }

  .cludo_results-list {
    list-style: none;
  }

  .cludo_results-list li {
    width: 100%;
    left: 0 !important;
    line-height: 1.5;
    padding-right: 0;
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.x_large};
  }

  .wnc-cludo-result {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: flex-start;
  }

  .cludo-banner {
    background-color: ${(props) => props.theme.theme_vars.colours.grey_light};
    color: ${(props) => props.theme.theme_vars.colours.black};
    width: 100%;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.medium};
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.large};
    overflow: hidden;
    ${(props) => props.theme.headingStyles}

    img {
      width: 100%;
      margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
      float: none;

      @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.l}) {
        width: 40%;
        margin-right: ${(props) => props.theme.theme_vars.spacingSizes.medium};
        margin-bottom: 0;
        float: left;
      }
    }

    a {
      text-decoration: underline !important;
      font-weight: 700 !important;
    }

    button {
      outline: none;
      background: transparent;
      border: none;

      a {
        background-color: ${(props) => props.theme.theme_vars.colours.action};
        color: ${(props) => props.theme.theme_vars.colours.white} !important;
        padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
        display: inline-block;
        border-radius: ${(props) => props.theme.theme_vars.border_radius};
        text-decoration: none !important;
        font-weight: 700 !important;

        &:hover {
          background-color: ${(props) => props.theme.theme_vars.colours.action_dark};
        }

        &:focus,
        &:active {
          color: ${(props) => props.theme.theme_vars.colours.black} !important;
          background-color: ${(props) => props.theme.theme_vars.colours.focus};
          box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
        }
      }
    }
  }

  .wnc-cludo-result {
    display: block;
    &:hover {
      .wnc-cludo-title {
        ${(props) => props.theme.linkStylesHover};
      }
    }

    &:focus {
      ${(props) => props.theme.linkStylesFocus};
    }

    &:active {
      ${(props) => props.theme.linkStylesActive};
    }
  }

  .wnc-cludo-title {
    color: ${(props) => props.theme.theme_vars.colours.action};
    font-weight: 700;
    text-decoration: underline;
    margin-bottom: 0;
    font-size: 1.2em;
  }

  .wnc-cludo-description {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
    color: ${(props) => props.theme.theme_vars.colours.black};
  }

  .wnc-cludo-badge {
    background-color: ${(props) => props.theme.theme_vars.colours.action};
    color: ${(props) => props.theme.theme_vars.colours.white};
    padding: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
    border-radius: ${(props) => props.theme.theme_vars.border_radius};
    font-size: ${(props) => props.theme.theme_vars.fontSizes.small};
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.small};
    display: inline-block;
  }

  .wnc-cludo-result-link {
    font-size: ${(props) => props.theme.theme_vars.fontSizes.extra_small};
    word-break: break-all;
  }

  .wnc-cludo-pagination ul {
    list-style: none;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    margin-left: 0;

    li {
      left: 0%;
      padding-right: ${(props) => props.theme.theme_vars.spacingSizes.small};

      button {
        background-color: ${(props) => props.theme.theme_vars.colours.action};
        color: ${(props) => props.theme.theme_vars.colours.white};
        outline: none;
        border: none;
        padding: 15px 19px;
        border-radius: ${(props) => props.theme.theme_vars.border_radius};
        cursor: pointer;

        &:hover {
          background-color: ${(props) => props.theme.theme_vars.colours.action_dark};
        }

        &:focus,
        &:active {
          background-color: ${(props) => props.theme.theme_vars.colours.focus};
          box-shadow: 0px -3px 0px 0px ${(props) => props.theme.theme_vars.colours.black} inset;
          color: ${(props) => props.theme.theme_vars.colours.black};
        }
      }
    }
  }
`;

export const ImageContainer = styled.div`
  img {
    width: 100%;
  }
`;

export const AutocompleteContainer = styled.div`
  margin-bottom: ${(props) => (props.$hasMargin ? props.theme.theme_vars.spacingSizes.medium : '0')};
`;

export const AutocompleteList = styled.ul`
  list-style: none;
  margin-top: 0 !important;
  margin-left: 0 !important;

  position: absolute;
  z-index: 20;
  background: ${(props) => props.theme.theme_vars.colours.white};

  li {
    cursor: pointer;
    border-color: ${(props) => props.theme.theme_vars.colours.black};
    border-style: solid;
    border-width: 1px 2px;
    left: 0 !important;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
    margin-bottom: 0 !important;

    &:hover,
    &.active {
      background: ${(props) => props.theme.theme_vars.colours.action};
      color: ${(props) => props.theme.theme_vars.colours.white};
    }
  }
`;

export const MobileFacets = styled.div`
  display: block;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: none;
  }
`;

export const DesktopFacets = styled.div`
  display: none;

  @media screen and (min-width: ${(props) => props.theme.theme_vars.breakpoints.m}) {
    display: block;
  }
`;
