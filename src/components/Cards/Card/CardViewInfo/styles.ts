import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

interface CardViewInfoProps {
  isDestaque: boolean;
}

export const CardViewInfoContainer = styled.div<CardViewInfoProps>`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-transform: capitalize;
  color: #000000;

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
