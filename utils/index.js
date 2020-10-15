import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import axios from 'axios';

export function Last30Days() {
  return dayjs().subtract(30, 'days').format('YYYY-MM-DD');
}

export function NumberOfDays(date) {
  dayjs.extend(relativeTime);
  return dayjs().to(date);
}

export const FormatNumber = (num) => {
  try {
    return num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',');
  } catch (error) {
    return num;
  }
};

const GithubAPI = axios.create({
  baseURL: 'https://api.github.com/search/'
});

export const GetGithubRepo = async (_page) => {
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
