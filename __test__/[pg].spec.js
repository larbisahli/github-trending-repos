/* eslint-disable no-undef */

import Page from '../pages/page/[pg]';
import { render, cleanup, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { FakeData } from '../api/__mocks__/GetGithubRepo';

afterEach(cleanup);

jest.mock('next/router', () => ({
  useRouter() {
    return {
      route: '/page/1',
      pathname: '/page/1',
      query: '',
      asPath: '',
      push: jest.fn(),
      prefetch: jest.fn()
    };
  }
}));

// jest.mock('../api/GetGithubRepo')

describe('Fetches repos and renders Page Component', () => {
  const repos = { totalPages: 0, LatestRepos: FakeData };
  const P_Lang = FakeData[0].language;
  const T_Lang = FakeData[1].language;

  it('renders two repos ', () => {
    render(<Page repos={repos} />);
    expect(screen.getAllByTestId('repo-test').length).toEqual(2);
  });

  it('has the correct programming language color', () => {
    render(<Page repos={repos} />);
    expect(screen.getByText(P_Lang).parentElement.firstChild).toHaveStyle({
      'background-color': 'rgb(53, 114, 165)'
    });
    expect(screen.getByText(T_Lang).parentElement.firstChild).toHaveStyle({
      'background-color': 'rgb(43, 116, 137)'
    });
  });

  it('has title', () => {
    render(<Page repos={repos} />);
    expect(screen.getByText('repo name 1')).toBeInTheDocument();
    expect(screen.getByText('repo name 2')).toBeInTheDocument();
  });

  it('has description', () => {
    render(<Page repos={repos} />);
    expect(screen.getByText('My description-1')).toBeInTheDocument();
    expect(screen.getByText('My description-2')).toBeInTheDocument();
  });
});
