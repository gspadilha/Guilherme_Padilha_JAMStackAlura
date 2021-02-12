import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: url('${get(theme, `backgroundImage`)}');
  `};
  background-size: cover;
  background-position: center;
  height: 94vh;
  text-align: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextTitulo = styled.span`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;

  color: ${({ theme }) => get(theme, `fontColor.primary`)};

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

export const TextSubtitulo = styled.span`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 3.6rem;
  text-align: center;

  color: ${({ theme }) => get(theme, `fontColor.primary`)};
`;
