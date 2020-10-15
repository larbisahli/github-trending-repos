import React from 'react';
import { Nav, GitHubLink, H1 } from './style';

const Headers = () => {
  return (
    <Nav as="nav">
      <H1>Github Most Starred Repos</H1>
      <GitHubLink>
        <a
          href="https://github.com/larbisahli/github-trending-repos"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img
            src="/static/images/GitHub-Mark-Light.png"
            width="25"
            alt="Github icon"
          />
        </a>
      </GitHubLink>
    </Nav>
  );
};

export default Headers;
