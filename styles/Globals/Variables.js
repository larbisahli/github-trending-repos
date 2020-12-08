import { css } from 'styled-components';

export const RootVariables = css`
  :root {
    --dark-env: 0;
    --bg-transition-duration: 400ms;
    --border-radius: 2px;
    --nav-fg-color: #e9e9e9;
    --theme-btn-fg: #333;
    --border-color: #e1e4e8;
    --txt-blue: #0366d6;
    --des-txt-color: #586069;
    --stat-txt-color: #797979;
    --skeleton-bgc: #dfdfdfee;
    --skeleton-gradient: #cccccca1;
    --bgc: #f9f9f9;
    --img-border-color: #e1e4e8;
    --fill-color: #586069;
  }

  .dark-mode {
    --dark-env: 1;
    --border-color: #444444;
    --theme-btn-bg: #333;
    --txt-blue: #58a6ff;
    --des-txt-color: #d4d4d4;
    --stat-txt-color: #bdbdbd;
    --skeleton-bgc: #3f3f3f98;
    --skeleton-gradient: #55555583;
    --bgc: #1f1f1f;
    --img-border-color: #424242;
    --fill-color: #ccc;
  }

  @media (prefers-color-scheme: dark) {
    :root {
      --dark-env: 1;
    }
  }
`;
