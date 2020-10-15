import styled, { css } from 'styled-components';
import {
  DisFlex_AIC_JCC,
  AbsolutePosition,
  RelativePosition,
  DisFlex,
  PreloadEffect
} from '../../styles';

export const Nav = styled(DisFlex_AIC_JCC)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 56px;
  padding: 0 2%;
  z-index: 999;
  color: #e9e9e9;
  box-shadow: 0px 1px 3px 1px rgba(0, 0, 0, 0.35);
  box-sizing: border-box;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    z-index: -1;
    height: 56px;
    background: url('/static/images/nav-bg.png') repeat-x top center
      rgba(26, 26, 26, 0.9);

    @media screen and (max-width: 735px) {
      background-color: #1a1a1a;
    }
  }
`;

export const H1 = styled.h1`
  font-weight: bold;
  font-size: 1.1em;
  letter-spacing: 1px;

  @media screen and (max-width: 735px) {
    font-size: 0.86em;
  }
`;

export const GitHubLink = styled(AbsolutePosition)`
  margin-right: 20px;
  right: 0;

  @media screen and (max-width: 735px) {
    margin-right: 10px;
  }
`;

export const Btn = styled.button`
  position: fixed;
  outline: none;
  box-sizing: border-box;
  z-index: 999;
  background-color: var(--bgc);
`;

export const FBtn = styled(Btn)`
  ${(props) =>
    props.isThemeBtn
      ? css`
          bottom: 15px;
          right: 15px;
        `
      : css`
          bottom: 80px;
          right: 15px;
          @media screen and (max-width: 735px) {
            bottom: 65px;
            right: 15px;
          }
        `}
`;

export const BtnContainer = styled(RelativePosition)`
  width: 3.2em;
  height: 3.2em;
  overflow: hidden;
  border-radius: 0.32em;
  cursor: pointer;
  color: var(--txt-blue);
  background: var(--theme-btn-bg);
  box-shadow: 0px 0px 2px rgba(0, 0, 0, 0.25),
    2px 5px 12px -2px rgba(0, 0, 0, 0.2),
    2px 0.45em 0.64em -0.21em rgba(0, 0, 0, 0.15);
  transform-origin: center center;
  transition: all 60ms ease-out 0s;

  @media screen and (max-width: 735px) {
    font-size: 0.75em;
  }
`;

export const Wrapper = styled(DisFlex_AIC_JCC)`
  position: absolute;
  flex-direction: column;
  width: 100%;
  padding-top: 0.32em;
  padding-bottom: 0.32em;
  top: 0;
  transition: all 320ms ease-out 100ms;
`;

const BtnActive = css`
  top: -2.456em;
  @media screen and (max-width: 735px) {
    top: -2.7em;
  }
`;

export const BtnWrapper = styled(Wrapper)`
  ${(props) => props.Active && BtnActive}
`;

export const SvgWrap = styled.div`
  width: 1.92em;
  height: 1.92em;
  margin: 0.356em;
`;

export const Repo_Container = styled(DisFlex)`
  position: relative;
  justify-content: stretch;
  padding-top: 20px !important;
  padding-bottom: 20px !important;
  width: 60%;
  border-bottom: 1px solid var(--border-color) !important;

  @media screen and (max-width: 1100px) {
    width: 70%;
  }

  @media screen and (max-width: 950px) {
    width: 80%;
  }

  @media screen and (max-width: 850px) {
    width: 90%;
  }

  @media screen and (max-width: 735px) {
    width: 100%;
  }
`;

export const Repo_Thumbnail = styled(DisFlex)`
  place-content: center;
  margin-right: 16px;
  border-radius: var(--border-radius);
  height: 120px;
  width: 120px;
  background-color: transparent !important;
  flex: 0;

  @media screen and (max-width: 735px) {
    align-items: flex-start;
    margin-left: 5px;
  }
`;

export const Repo_Thumbnail_wrap = styled.div`
  height: 120px;
  width: 120px;

  @media screen and (max-width: 735px) {
    height: 80px;
    width: 80px;
  }
`;

export const Repo_Thumbnail_wrap_img = styled.img`
  border-radius: var(--border-radius);
  border: 1px solid var(--img-border-color);
  background-color: #f9f9f9;
`;

export const Repo_Body = styled(DisFlex)`
  position: relative;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  font-size: 1rem;

  @media screen and (max-width: 735px) {
    flex-wrap: wrap;
  }
`;

export const Repo_Body_Top = styled.div`
  word-break: keep-all !important;
  box-sizing: border-box;
  max-width: 80%;

  @media screen and (max-width: 735px) {
    max-width: 90%;
  }
`;

export const Repo_Body_Top__Title = styled.div`
  font-family: Lato;
  font-weight: bold;
  font-size: 1.15em;
  cursor: pointer;
  color: var(--txt-blue);
  word-break: break-all !important;
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 735px) {
    font-size: 1em;
  }
`;

export const Repo_Body_Top__Desc = styled.div`
  line-height: 1.5;
  font-size: 0.88em;
  margin-top: 4px;
  word-break: break-all !important;
  color: var(--des-txt-color);
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;

  @media screen and (max-width: 735px) {
    line-height: 1.2;
    font-size: 0.8em;
    word-wrap: break-word !important;
    box-sizing: border-box;
  }
`;

export const Repo_Body_Bottom = styled(DisFlex)`
  align-items: stretch;
  flex: 0;

  @media screen and (max-width: 735px) {
    flex-flow: row wrap;
  }
`;

export const Repo_Stat_Container = styled(DisFlex)`
  margin-right: 16px !important;
  place-content: center;
  align-items: center;

  @media screen and (max-width: 735px) {
    margin-right: 10px !important;
    margin-bottom: 5px;
  }
`;

export const Repo_Stat_Lang = styled(RelativePosition)`
  margin-right: 5px;
  top: 0;
  width: 12px;
  height: 12px;
  border-radius: 50%;
`;

export const Repo_Stat_Txt = styled(RelativePosition)`
  font-size: 0.7em;
  color: var(--stat-txt-color);

  ${Repo_Stat_Container}:hover & {
    cursor: default;
    color: var(--txt-blue);
  }
`;

export const Repo_Stat_Txt__noHover = styled(RelativePosition)`
  font-size: 0.7em;
  color: var(--stat-txt-color);
`;

export const Repo_Skeleton_Thumbnail = styled.div`
  margin-right: 16px;
  border-radius: var(--border-radius);
  width: 120px;
  height: 120px;
  background-color: var(--skeleton-bgc);

  @media screen and (max-width: 735px) {
    width: 80px;
    height: 80px;
    margin-left: 5px;
  }
`;
export const Repo_Skeleton_BodyContainer = styled(DisFlex)`
  flex-direction: column;
  flex: 1;
`;

export const Repo_Skeleton_BodyTop = styled.div`
  flex: 1;
  word-break: break-all !important;
  max-width: 65%;
`;
export const Repo_Skeleton_BodyTitle = styled(PreloadEffect)`
  width: 80%;
  height: 15px;
  margin-bottom: 10px;
  border-radius: var(--border-radius);

  @media screen and (max-width: 735px) {
    width: 85%;
    height: 8px;
  }
`;

export const Repo_Skeleton_BodyDesc = styled(PreloadEffect)`
  width: 40%;
  height: 6px;
  border-radius: var(--border-radius);
  margin-bottom: 8px;

  @media screen and (max-width: 735px) {
    width: 45%;
    margin-bottom: 5px;
    height: 3px;
  }
`;

export const Repo_Skeleton_BodyBottom = styled(DisFlex)`
  flex: 0;
`;

export const Repo_Skeleton_BodyTxt = styled(PreloadEffect)`
  width: 50px;
  height: 10px;
  margin-right: 16px;
  border-radius: var(--border-radius);

  @media screen and (max-width: 735px) {
    width: 30px;
    height: 8px;
    margin-right: 8px;
  }
`;
