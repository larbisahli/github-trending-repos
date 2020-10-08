import React from 'react';
import NextLink from 'next/link';

const Error = () => {
  return (
    <div style={{ margin: '100px' }}>
      <div>404 – Unavailable Page</div>
      <p>
        Why show a generic 404 when I can make it sound mysterious? It seems
        you&apos;ve found something that used to exist, or you spelled something
        wrong. Can you double check that URL?
      </p>
      <NextLink href="/?pg=1" passHref>
        <a>Return Home</a>
      </NextLink>
    </div>
  );
};

export default Error;
