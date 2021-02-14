import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Content = styled.nav`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  padding: 0.5rem;
`;

export const MeContent = styled.section`
  a {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-style: normal;
    font-weight: normal;
    text-align: center;
    text-transform: uppercase;

    background-color: ${({ theme }) => theme.primary};
    color: ${({ theme }) => theme.fontColor.secondary};

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
  }
`;

export const PagesContent = styled.section`
  a {
    font-family: ${({ theme }) => theme.fontFamily.secondary};
    font-style: normal;
    font-weight: normal;
    text-align: center;
    text-transform: capitalize;
    background-color: transparent;

    color: ${({ theme }) => theme.fontColor.primary};

    padding: 0 1rem;

    &:hover {
      color: ${({ theme }) => {
        const fontColor = theme.fontColor.primary;
        return theme.isLight ? lighten(0.5, fontColor) : darken(0.5, fontColor);
      }};
      transition: 0.2s;
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
  }
`;
