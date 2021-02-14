import styled, { css } from 'styled-components';
import { darken, lighten } from 'polished';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';

export const Content = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
`;

export const MeContent = styled.span`
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
`;

export const PagesContent = styled.nav`
  font-family: ${({ theme }) => theme.fontFamily.secondary};
  font-style: normal;
  font-weight: normal;
  text-align: center;
  text-transform: capitalize;
  background-color: transparent;

  color: ${({ theme }) => theme.fontColor.primary};

  span,
  a {
    padding: 1rem;

    &:hover {
      color: ${({ theme }) => {
        const fontColor = theme.fontColor.primary;
        return theme.isLight ? lighten(0.5, fontColor) : darken(0.5, fontColor);
      }};
      transition: 0.2s;
    }
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
