import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardTitleContainer = styled.div`
  font-family: 'Fira Sans';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  color: #000000;

  padding: 0.5rem 0 1rem 0;

  ${breakpointsMedia({
    xs: css`
      font-size: 1.5rem;
      line-height: 1.8rem;
    `,
    md: css`
      font-size: 2rem;
      line-height: 2.4rem;
    `,
  })}
`;
