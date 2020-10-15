import React, { memo } from 'react';
import colors from '../data/colors.json';
import { ForkSvg, IssuesSvg, LicenseSvg, StarSvg } from '../Svgs';
import {
  Repo_Container,
  Repo_Thumbnail,
  Repo_Thumbnail_wrap,
  Repo_Thumbnail_wrap_img,
  Repo_Body_Top,
  Repo_Body,
  Repo_Body_Top__Title,
  Repo_Body_Top__Desc,
  Repo_Body_Bottom,
  Repo_Stat_Container,
  Repo_Stat_Txt,
  Repo_Stat_Lang,
  Repo_Stat_Txt__noHover
} from './style';
import PropTypes from 'prop-types';
import { FormatNumber } from '../utils';

const RepoContainer = ({ Item }) => {
  return (
    <Repo_Container>
      {/* Thumbnail container */}
      <Repo_Thumbnail>
        <Repo_Thumbnail_wrap
          as="a"
          href={Item.user_url}
          target="_blank"
          rel="noopener noreferrer"
          title={Item.user_name}
        >
          <Repo_Thumbnail_wrap_img
            src={Item.avatar_url}
            alt=""
          ></Repo_Thumbnail_wrap_img>
        </Repo_Thumbnail_wrap>
      </Repo_Thumbnail>
      <Repo_Body>
        {/* Body container */}
        <Repo_Body_Top>
          <Repo_Body_Top__Title
            as="a"
            href={Item.repo_url}
            target="_blank"
            rel="noopener noreferrer"
          >
            {Item.name}
          </Repo_Body_Top__Title>
          <Repo_Body_Top__Desc as="p">{Item.description}</Repo_Body_Top__Desc>
        </Repo_Body_Top>
        <Repo_Body_Bottom>
          {Item.language && (
            <Repo_Stat_Container>
              <Repo_Stat_Lang
                as="span"
                style={{
                  backgroundColor: colors[Item.language]?.color ?? 'transparent'
                }}
              ></Repo_Stat_Lang>
              <Repo_Stat_Txt__noHover
                as="a"
                href={colors[Item.language]?.url ?? ''}
                target="_blank"
                rel="noopener noreferrer"
              >
                {Item.language}
              </Repo_Stat_Txt__noHover>
            </Repo_Stat_Container>
          )}

          {Item.license && (
            <Repo_Stat_Container>
              <LicenseSvg />

              <Repo_Stat_Txt title={Item.license.name}>
                {Item.license.key}
              </Repo_Stat_Txt>
            </Repo_Stat_Container>
          )}

          <Repo_Stat_Container>
            <ForkSvg />

            <Repo_Stat_Txt>{FormatNumber(Item.forks_count) ?? 0}</Repo_Stat_Txt>
          </Repo_Stat_Container>
          <Repo_Stat_Container>
            <StarSvg />

            <Repo_Stat_Txt>
              {FormatNumber(Item.stargazers_count) ?? 0}
            </Repo_Stat_Txt>
          </Repo_Stat_Container>
          <Repo_Stat_Container>
            <IssuesSvg />
            <Repo_Stat_Txt>
              {FormatNumber(Item.open_issues_count) ?? 0}
            </Repo_Stat_Txt>
          </Repo_Stat_Container>
          <Repo_Stat_Container>
            <Repo_Stat_Txt__noHover>{`Submitted ${Item.createdAt} by ${Item.user_name}`}</Repo_Stat_Txt__noHover>
          </Repo_Stat_Container>
        </Repo_Body_Bottom>
      </Repo_Body>
    </Repo_Container>
  );
};

RepoContainer.propTypes = {
  Item: PropTypes.shape({
    user_name: PropTypes.string,
    avatar_url: PropTypes.string,
    user_url: PropTypes.string,
    name: PropTypes.string,
    description: PropTypes.string,
    language: PropTypes.string,
    license: PropTypes.object,
    repo_url: PropTypes.string,
    forks_count: PropTypes.number,
    stargazers_count: PropTypes.number,
    open_issues_count: PropTypes.number,
    createdAt: PropTypes.string
  })
};

export default memo(RepoContainer);
