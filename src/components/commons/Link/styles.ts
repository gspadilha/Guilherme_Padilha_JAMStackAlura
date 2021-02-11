import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

export const LinkContainer = styled.a`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-decoration: none;
  text-transform: capitalize;
  color: #000000;

  img {
    display: flex;
    align-items: center;
    justify-content: center;
  }

  ${breakpointsMedia({
    xs: css`
      font-size: 1.125rem;
      line-height: 1.35rem;
    `,
    md: css`
      font-size: 1.75rem;
      line-height: 2.1rem;
    `,
  })}
`;
