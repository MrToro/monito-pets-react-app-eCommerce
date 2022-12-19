import styled from 'styled-components';
import { createGlobalStyle } from 'styled-components';

export const GlobalCSS = createGlobalStyle`

  /* Global ========================================================================== */

  *,
  *::before,
  *::after {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
  }

  /* Document ========================================================================== */

  html {
    position: relative;
    overflow: auto;
    width: 100%;
    min-height: 100%;
    font-size: 62.5%;
    line-height: 1.15;
    -webkit-text-size-adjust: 100%;
  }

  /* Sections ========================================================================== */

  body {
    position: relative;
    overflow: hidden;
    width: 100%;
    min-height: 100%;
    margin: 0;
  }

  header,
  menu,
  nav,
  main,
  section,
  article,
  aside,
  details,
  figcaption,
  figure,
  footer,
  hgroup {
    display: block;
  }

  main {
    display: block;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  p {
    font-weight: normal;
    text-rendering: optimizeLegibility;
  }

  /* Grouping content ========================================================================== */

  hr {
    overflow: visible;
    box-sizing: content-box;
    height: 0;
  }

  pre {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  /* Text-level semantics ========================================================================== */

  a {
    background-color: transparent;
    text-decoration: none;
  }

  menu,
  ul {
    list-style: none;
  }

  ol {
    list-style-type: decimal;
    list-style-position: outside;
  }

  abbr[title] {
    border-bottom: none;
    text-decoration: underline;
    text-decoration: underline dotted;
  }

  b,
  strong {
    font-weight: bolder;
  }

  code,
  kbd,
  samp {
    font-family: monospace, monospace;
    font-size: 1em;
  }

  small {
    font-size: 80%;
  }

  sub,
  sup {
    position: relative;
    vertical-align: baseline;
    font-size: 75%;
    line-height: 0;
  }

  sub {
    bottom: -0.25em;
  }

  sup {
    top: -0.5em;
  }

  /* Embedded content ========================================================================== */

  img {
    max-width: 100%;
    border-style: none;
    display: block;
    object-fit: cover;
  }

  /* Forms ========================================================================== */

  button,
  input,
  optgroup,
  select,
  textarea {
    margin: 0;
    font-family: inherit;
    font-size: 100%;
    line-height: 1.15;
  }

  button,
  input {
    overflow: visible;
  }

  button,
  select {
    text-transform: none;
  }

  button,
  [type="button"],
  [type="reset"],
  [type="submit"] {
    -webkit-appearance: button;
  }

  button::-moz-focus-inner,
  [type="button"]::-moz-focus-inner,
  [type="reset"]::-moz-focus-inner,
  [type="submit"]::-moz-focus-inner {
    border-style: none;
    padding: 0;
  }

  button:-moz-focusring,
  [type="button"]:-moz-focusring,
  [type="reset"]:-moz-focusring,
  [type="submit"]:-moz-focusring {
    outline: 1px dotted ButtonText;
  }

  fieldset {
    padding: 0.35em 0.75em 0.625em;
  }

  legend {
    box-sizing: border-box;
    padding: 0;
    max-width: 100%;
    display: table;
    color: inherit;
    white-space: normal;
  }

  progress {
    vertical-align: baseline;
  }

  textarea {
    overflow: auto;
  }

  [type="checkbox"],
  [type="radio"] {
    box-sizing: border-box;
    padding: 0;
  }

  [type="number"]::-webkit-inner-spin-button,
  [type="number"]::-webkit-outer-spin-button {
    height: auto;
  }

  [type="search"] {
    -webkit-appearance: textfield;
    outline-offset: -2px;
  }

  [type="search"]::-webkit-search-decoration {
    -webkit-appearance: none;
  }

  ::-webkit-file-upload-button {
    -webkit-appearance: button;
    font: inherit;
  }

  iframe,
  fieldset,
  legend,
  img,
  button,
  input[type="text"] {
    border: none;
  }

  /* Interactive ========================================================================== */

  details {
    display: block;
  }

  summary {
    display: list-item;
  }

  /* Misc ========================================================================== */

  template {
    display: none;
  }

  [hidden] {
    display: none;
  }
`;