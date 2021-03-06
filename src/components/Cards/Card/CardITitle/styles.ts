import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardTitleContainer = styled.div`
  font-family: ${({ theme }) => theme.fontFamily.primary};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;

  color: ${({ theme }) => theme.fontColor.primary};

  padding: 0.75rem;

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
