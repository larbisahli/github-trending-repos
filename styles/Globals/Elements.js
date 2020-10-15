import { css } from 'styled-components';

export const ElementsCollection = css`
  * {
    margin: 0;
    border: 0;
    padding: 0;
    background-color: transparent;
    color: inherit;
    font-family: inherit;
    font-size: inherit;
    font-style: inherit;
    font-weight: inherit;
    line-height: inherit;
    box-sizing: border-box;
  }

  html,
  body {
    display: block !important;
    font-family: -apple-system, sans-serif, Segoe UI, Roboto, Helvetica;
    font-size: 1rem;
    font-weight: 400;
    line-height: 1;
    letter-spacing: 0;
    transition-property: all;
    transition-duration: var(--bg-transition-duration);
    transition-timing-function: ease-out;
    transition-delay: 0s;
  }

  p {
    display: block;
    margin-block-start: 0.5em;
    margin-block-end: 0.5em;
    margin-inline-start: 0px;
    margin-inline-end: 0px;
  }

  img {
    display: block;
    margin-left: auto;
    margin-right: auto;
    max-height: none;
    max-width: 100%;
    border-radius: none;
  }

  a,
  a:hover,
  a:focus,
  a:active {
    text-decoration: none;
  }

  div {
    -webkit-tap-highlight-color: transparent;
  }

  svg {
    display: inline-block;
    vertical-align: middle;
    transform-origin: center;
    overflow: hidden;
    margin: 0;
    padding: 0;
  }
`;
