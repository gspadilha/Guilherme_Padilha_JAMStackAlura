import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

interface CardViewInfoProps {
  isDestaque: boolean;
}

export const CardViewInfoContainer = styled.div<CardViewInfoProps>`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;

  color: ${({ theme }) => theme.fontColor.primary};

  ${({ isDestaque }) => {
    if (isDestaque) {
      return breakpointsMedia({
        xs: css`
          display: none;
        `,
        md: css`
          display: block;
        `,
      });
    }
  }}
`;
