import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Container = styled.div`
  ${({ theme }) => css`
    background-image: url('${theme.backgroundImage}');
  `};
  background-size: cover;
  background-position: center;
  height: 94vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const TextTitulo = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: normal;
  text-align: center;

  color: ${({ theme }) => theme.fontColor.primary};

  ${breakpointsMedia({
    xs: css`
      font-size: 4rem;
      line-height: 4.8rem;
    `,
    md: css`
      font-size: 5.625rem;
      line-height: 6.75rem;
    `,
  })}
`;

export const TextSubtitulo = styled.p`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: 300;
  text-align: center;

  color: ${({ theme }) => theme.fontColor.primary};

  ${breakpointsMedia({
    xs: css`
      font-size: 3rem;
      line-height: 3.6rem;
    `,
    md: css`
      font-size: 3rem;
      line-height: 3.6rem;
    `,
  })}
`;
