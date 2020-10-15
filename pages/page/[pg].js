import React, { useState, useEffect, useRef } from 'react';
import { AppContainer, ReposListContainer } from '../../styles/Home';
import {
  Header,
  RepoContainer,
  RepoSkeleton,
  ThemeBtn,
  ScrollBtn
} from '../../Components';
import { useRouter } from 'next/router';
import { GetGithubRepo, NumberOfDays } from '../../utils';
import PropTypes from 'prop-types';

function Page({ repos }) {
  const Router = useRouter();
  const { pg } = Router.query;
  const [ListOfRepos, setListOfRepos] = useState([]);
  const NextPageRef = useRef(1);
  const { totalPages, LatestRepos } = repos ?? {
    totalPages: 0,
    LatestRepos: []
  };

  useEffect(() => {
    window.addEventListener('scroll', (e) => {
      handleScoll(e);
    });
  }, []);

  useEffect(() => {
    NextPageRef.current = NextPageRef.current + 1;
    setListOfRepos((repos_) => {
      return [...repos_, ...LatestRepos];
    });
  }, [pg]);

  const handleScoll = (e) => {
    if (e.isTrusted) {
      if (totalPages <= NextPageRef.current) return;
      const lastRepo = document.getElementById('repos-list').lastChild;
      const lastRepoOffset = lastRepo.offsetTop + lastRepo.clientHeight;
      const pageOffset = window.pageYOffset + window.innerHeight;
      if (pageOffset > lastRepoOffset - 30) {
        Router.push(`/page/${NextPageRef.current}`);
      }
    }
  };

  return (
    <AppContainer>
      <Header />
      <ReposListContainer id="repos-list">
        {ListOfRepos &&
          ListOfRepos.map((Item) => (
            <RepoContainer Item={Item} key={Item.id} />
          ))}
        {(Router.isFallback || !(ListOfRepos.length > 0)) &&
          [...Array(3)].map((e, i) => {
            return <RepoSkeleton key={i} />;
          })}
        <RepoSkeleton />
      </ReposListContainer>
      <ScrollBtn />
      <ThemeBtn />
    </AppContainer>
  );
}

export async function getStaticPaths() {
  return {
    paths: [
      { params: { pg: '1' } },
      { params: { pg: '2' } },
      { params: { pg: '3' } },
      { params: { pg: '4' } },
      { params: { pg: '5' } },
      { params: { pg: '6' } },
      { params: { pg: '7' } },
      { params: { pg: '8' } }
    ],
    fallback: true
  };
}

export async function getStaticProps({ params }) {
  let LatestRepos = [];

  const repos = await GetGithubRepo(params.pg)
    .then((data) => {
      data.items.map((res) => {
        return (LatestRepos = [
          ...LatestRepos,
          {
            id: res.id,
            avatar_url: res.owner.avatar_url,
            user_url: res.owner.html_url,
            user_name: res.owner.login,
            name: res.name,
            createdAt: NumberOfDays(res.created_at),
            description: res.description,
            forks_count: res.forks_count,
            language: res.language,
            license: res.license
              ? { key: res.license.key, name: res.license.name }
              : res.license,
            open_issues_count: res.open_issues_count,
            repo_url: res.html_url,
            stargazers_count: res.stargazers_count
          }
        ]);
      });
      let totalPages = Math.round(data.total_count ? data.total_count / 25 : 0);
      return { totalPages, LatestRepos };
    })
    .catch(() => {
      return { totalPages: 0, LatestRepos: [] };
    });

  return {
    props: {
      repos
    },
    revalidate: 86400 // Update every day
  };
}

Page.propTypes = {
  repos: PropTypes.shape({
    totalPages: PropTypes.number,
    LatestRepos: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number,
        avatar_url: PropTypes.string,
        user_url: PropTypes.string,
        user_name: PropTypes.string,
        name: PropTypes.string,
        createdAt: PropTypes.string,
        description: PropTypes.string,
        forks_count: PropTypes.number,
        language: PropTypes.string,
        license: PropTypes.any,
        open_issues_count: PropTypes.number,
        repo_url: PropTypes.string,
        stargazers_count: PropTypes.number
      })
    )
  })
};

export default Page;
