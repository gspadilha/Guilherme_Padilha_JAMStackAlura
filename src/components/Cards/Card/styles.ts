import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../theme/utils/breakpointsMedia';

interface ICardProps {
  isDestaque: boolean;
}

export const CardContainer = styled.div<ICardProps>`
  border: 1px solid ${({ theme }) => theme.primary};
  border-radius: 5px;
  margin: 0.5rem -0.15rem;
  position: relative;
  background-color: '#000000';

  > div {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 0.25rem;
  }

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
