import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

interface ICardProps {
  isDestaque: boolean;
}

export const CardContainer = styled.div<ICardProps>`
  border: 1px solid red;
  margin: 1rem;

  ${({ isDestaque }) => {
    if (isDestaque) {
      return breakpointsMedia({
        xs: css`
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
        `,
        md: css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `,
      });
    }
  }}
`;
