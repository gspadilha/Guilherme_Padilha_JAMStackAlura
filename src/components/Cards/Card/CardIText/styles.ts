import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

interface ICardProps {
  isDestaque: boolean;
}

export const CardTextContainer = styled.div<ICardProps>`
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
