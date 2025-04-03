import styled from 'styled-components';

export const Container = styled.div`
  display: block;

  a {
    text-decoration: none !important;
    font-weight: normal;

    b {
      font-weight: bold;
    }
  }

  .wnc-cludo-input {
    padding-left: 0;
    padding-right: 0;
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};
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
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 6px 0 0 6px;
    box-shadow: 0 0 0 1px #e2ca76, 0 0 0 3px #000;
  }

  .wnc-cludo-input button {
    height: 46px;
    width: 46px;
    margin-left: 0;
    border: 2px solid ${(props) => props.theme.theme_vars.colours.black};
    border-radius: 0 6px 6px 0;
    background-color: ${(props) => props.theme.theme_vars.colours.action};

    &:hover {
      background-color: ${(props) => props.theme.theme_vars.action_dark};
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
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.medium};

    h3 {
      ${(props) => props.theme.theme_vars.h3};
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
        font-size: ${(props) => props.theme.theme_vars.fontSizes.small};

        &.cludo-active {
          background-color: ${(props) => props.theme.theme_vars.colours.action};
          color: ${(props) => props.theme.theme_vars.colours.white};
        }
      }
    }
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
    background-color: ${(props) => props.theme.theme_vars.colours.action_light};
    color: ${(props) => props.theme.theme_vars.colours.black};
    width: 100%;
    padding: ${(props) => props.theme.theme_vars.spacingSizes.small};
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
  }

  .wnc-cludo-pagination {
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
