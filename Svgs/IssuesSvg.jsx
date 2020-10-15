import React, { memo } from 'react';
import { SvgContainer, Svg } from './style';

// SVG path COPIED FROM GITHUB

function IssuesSvg(props) {
  return (
    <SvgContainer {...props}>
      <Svg height="16" width="14" viewBox="0 0 14 16" focusable={false}>
        <g>
          <path d="M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 011.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"></path>
        </g>
      </Svg>
    </SvgContainer>
  );
}

export default memo(IssuesSvg);
