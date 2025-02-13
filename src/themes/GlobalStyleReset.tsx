import { createGlobalStyle } from 'styled-components';

/**
 * Global style reset
 * Based upon http://meyerweb.com/eric/tools/css/reset/ with additions to return
 * lists to sane settings. Use for styles common to all themes.
 */
export const GlobalStyleReset: any = createGlobalStyle<any>`
  html {
    box-sizing: border-box;
  }
  *,
  *:before,
  *:after {
    box-sizing: inherit;
  }

  html,
  body,
  div,
  span,
  applet,
  object,
  iframe,
  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p,
  blockquote,
  pre,
  a,
  abbr,
  acronym,
  address,
  big,
  cite,
  code,
  del,
  dfn,
  em,
  img,
  ins,
  kbd,
  q,
  s,
  samp,
  small,
  strike,
  strong,
  sub,
  sup,
  tt,
  var,
  b,
  u,
  i,
  center,
  dl,
  dt,
  dd,
  ol,
  ul,
  li,
  fieldset,
  form,
  label,
  legend,
  table,
  caption,
  tbody,
  tfoot,
  thead,
  tr,
  th,
  td,
  article,
  aside,
  canvas,
  details,
  embed,
  figure,
  figcaption,
  footer,
  header,
  hgroup,
  menu,
  nav,
  output,
  ruby,
  section,
  summary,
  time,
  mark,
  audio,
  video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  header,
  hgroup,
  menu,
  nav,
  section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol {
    list-style: decimal outside;
    margin: 1rem 0rem 1rem 1.25rem;
  }
  ul {
    list-style: disc outside;
    margin: 1rem 0rem 1rem 1.25rem;
  }
  li {
    position: relative;
    left: 1.25rem;
    padding-right: 1.25rem;
  }
  main li > a {
    display: inline-block;
    min-height: 44px;
  }
  blockquote,
  q {
    quotes: none;
  }
  blockquote:before,
  blockquote:after,
  q:before,
  q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  .table-container li {
    left: 0;
  }
  table tr td {
    vertical-align: top;
  }
  body {
    position: static;
    top: 0px !important;
  }
  iframe.skiptranslate {
    display: none !important;
  }
  /* Hide the rate this translation popup */
  #goog-gt-tt {
    display: none !important;
  }
`;
