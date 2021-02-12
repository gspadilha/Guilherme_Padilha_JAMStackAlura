import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import get from 'lodash/get';

export const Container = styled.div`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;

  color: ${({ theme }) => get(theme, `fontColor.primary`)};

  padding: 4rem 0;

  ${breakpointsMedia({
    xs: css`
      font-size: 2.25rem;
      line-height: 2.7rem;
    `,
    md: css`
      font-size: 3.75rem;
      line-height: 4.5rem;
    `,
  })}
`;
