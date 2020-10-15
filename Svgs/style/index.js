import styled from 'styled-components';
import { DisFlex_AIC } from '../../styles';
import { Repo_Stat_Container } from '../../Components/style';

export const SvgContainer = styled(DisFlex_AIC)`
  justify-content: flex-start;
  margin-right: 5px;
`;

export const Svg = styled.svg`
  z-index: 5;

  & > g > path {
    fill: var(--fill-color);
  }

  ${Repo_Stat_Container}:hover & {
    & > g > path {
      fill: var(--txt-blue) !important;
    }
  }
`;
