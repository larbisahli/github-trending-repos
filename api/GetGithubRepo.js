import axios from 'axios';
import { Last30Days } from '../utils';

const GithubAPI = axios.create({
  baseURL: 'https://api.github.com/search/'
});

export default async (_page) => {
  return await GithubAPI.get('repositories', {
    headers: {
      Authorization: `Bearer ${process.env.GITHUB_TOKEN_KEY}`,
      'Content-Type': 'application/json'
    },
    params: {
      q: `created:>${Last30Days()}`,
      sort: 'stars',
      order: 'desc',
      per_page: 25,
      page: _page
    }
  }).then(({ data }) => data);
};
