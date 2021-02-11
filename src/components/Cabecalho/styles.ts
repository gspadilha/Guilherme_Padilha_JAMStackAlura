import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Container = styled.section`
  width: 100%;
  height: 6vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #fff8e6;
  color: #ffffff;
`;

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MeContent = styled.span`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: uppercase;
  background-color: #e9c46a;
  color: #ffffff;

  padding: 0.5rem;

  ${breakpointsMedia({
    xs: css`
      font-size: 1.125rem;
      line-height: 1.35rem;
    `,
    md: css`
      font-size: 2.375rem;
      line-height: 2.85rem;
    `,
  })}
`;

export const PagesContent = styled.nav`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  background-color: transparent;
  color: #000000;

  span {
    padding: 1rem;
  }

  ${breakpointsMedia({
    xs: css`
      font-size: 1.125rem;
      line-height: 1.35rem;
    `,
    md: css`
      font-size: 1.75rem;
      line-height: 2.1rem;
    `,
  })}
`;
