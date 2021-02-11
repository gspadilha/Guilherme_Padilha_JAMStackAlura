import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Container = styled.section`
  background: url('/images/background-capa.jpg');
  background-size: cover;
  background-position: center;
  height: 94vh;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;

  > div {
    flex: 1;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`;

export const TextTitulo = styled.div`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  color: #000000;

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

export const TextSubtitulo = styled.div`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 3rem;
  line-height: 3.6rem;
  text-align: center;
  color: #000000;
`;
