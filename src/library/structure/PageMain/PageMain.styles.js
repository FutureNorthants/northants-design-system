import styled, { css } from 'styled-components';

export const Container = styled.main`
  padding-top: 30px;

  a {
    ${(props) => props.theme.linkStyles}
    &:hover {
      ${(props) => props.theme.linkStylesHover}
    }
    &:focus {
      ${(props) => props.theme.linkStylesFocus}
    }
    &:active {
      ${(props) => props.theme.linkStylesActive}
    }
  }

  p {
    margin-bottom: 15px;
  }

  & > p,
  & > ul,
  & > ol,
  & > h2,
  & > h3,
  & > h4 {
    max-width: ${(props) => (props.fullWidthText ? `100%` : '750px')};
  }

  li {
    margin-bottom: ${(props) => props.theme.theme_vars.spacingSizes.extra_small};
  }

  strong,
  bold {
    font-weight: 700;
  }
  em {
    font-style: italic;
  }

  sub,
  sup {
    font-size: 75%;
    line-height: 0;
    position: relative;
    vertical-align: baseline;
  }
  sup {
    top: -0.5em;
  }
  sub {
    bottom: -0.25em;
  }

  // TABLE STYLES
  .table-container {
    max-width: 100%;
    overflow-y: auto;

    table {
      max-width: none;
    }
  }
  table {
    width: 100%;
    border-collapse: collapse;
    margin-bottom: 25px;
    max-width: 100%;
    overflow-y: auto;

    caption {
      text-align: left;
      padding-left: 10px;
      margin-bottom: 15px;
      font-weight: bold;
    }
  }

  tr {
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.grey};
    &:hover {
      background: ${(props) => props.theme.theme_vars.colours.grey_light} !important;
    }
  }

  tr:nth-of-type(even) {
    background: ${(props) => props.theme.theme_vars.colours.grey_light}40;
  }

  td,
  th {
    padding: 10px;
    text-align: left;
  }
  th {
    font-weight: bold;
  }
  thead tr {
    border-bottom: 1px solid ${(props) => props.theme.theme_vars.colours.black};
    &:hover {
      background: transparent !important;
    }
  }

  @media only screen and (max-width: ${(props) => props.theme.theme_vars.breakpoints.s}) {
    table {
      width: 100%;
    }
  }
`;
