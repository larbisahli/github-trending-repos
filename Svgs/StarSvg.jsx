import React, { memo } from 'react';
import { SvgContainer, Svg } from './style';

// SVG path COPIED FROM GITHUB

function StarSvg(props) {
  return (
    <SvgContainer {...props}>
      <Svg
        className="github_svg__wrapper"
        height="16"
        width="14"
        viewBox="0 0 14 16"
        focusable={false}
      >
        <g>
          <path d="M14 6l-4.9-.64L7 1 4.9 5.36 0 6l3.6 3.26L2.67 14 7 11.67 11.33 14l-.93-4.74L14 6z"></path>
        </g>
      </Svg>
    </SvgContainer>
  );
}

export default memo(StarSvg);
