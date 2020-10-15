import styled, { keyframes } from 'styled-components';

export const RelativePosition = styled.div`
  position: relative;
`;

export const AbsolutePosition = styled.div`
  position: absolute;
`;

export const DisFlex = styled.div`
  display: flex;
`;

export const DisFlex_AIC = styled.div`
  display: flex;
  align-items: center;
`;
export const DisFlex_JCC = styled.div`
  display: flex;
  justify-content: center;
`;
export const DisFlex_AIC_JCC = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const PreloadSkeleton = keyframes`
0% {
    background-position: -369px 0;
   }

100% {
    background-position: 369px 0;
   }
`;

export const PreloadEffect = styled.div`
  background-color: var(--skeleton-bgc);
  background-repeat: repeat-y;
  animation-fill-mode: forwards;
  animation: ${PreloadSkeleton} 1s linear 0s infinite;
  background-image: linear-gradient(
    var(--skeleton-gradient) 120px,
    transparent 0
  );
`;
