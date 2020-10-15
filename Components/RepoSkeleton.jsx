import React from 'react';
import {
  Repo_Container,
  Repo_Skeleton_Thumbnail,
  Repo_Skeleton_BodyContainer,
  Repo_Skeleton_BodyTitle,
  Repo_Skeleton_BodyDesc,
  Repo_Skeleton_BodyTop,
  Repo_Skeleton_BodyBottom,
  Repo_Skeleton_BodyTxt
} from './style';

const RepoSkeleton = () => {
  return (
    <Repo_Container>
      <Repo_Skeleton_Thumbnail></Repo_Skeleton_Thumbnail>
      <Repo_Skeleton_BodyContainer>
        <Repo_Skeleton_BodyTop>
          <Repo_Skeleton_BodyTitle></Repo_Skeleton_BodyTitle>
          <Repo_Skeleton_BodyDesc></Repo_Skeleton_BodyDesc>
          <Repo_Skeleton_BodyDesc></Repo_Skeleton_BodyDesc>
          <Repo_Skeleton_BodyDesc></Repo_Skeleton_BodyDesc>
        </Repo_Skeleton_BodyTop>
        <Repo_Skeleton_BodyBottom>
          <Repo_Skeleton_BodyTxt></Repo_Skeleton_BodyTxt>
          <Repo_Skeleton_BodyTxt></Repo_Skeleton_BodyTxt>
          <Repo_Skeleton_BodyTxt></Repo_Skeleton_BodyTxt>
          <Repo_Skeleton_BodyTxt></Repo_Skeleton_BodyTxt>
        </Repo_Skeleton_BodyBottom>
      </Repo_Skeleton_BodyContainer>
    </Repo_Container>
  );
};

export default RepoSkeleton;
