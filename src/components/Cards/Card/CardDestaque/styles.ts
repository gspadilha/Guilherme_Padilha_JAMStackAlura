import styled, { css } from 'styled-components';
import get from 'lodash/get';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardDestaqueContainer = styled.span`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: 300;
  text-transform: capitalize;

  background: ${({ theme }) => get(theme, `fontColor.secondary`)};
  color: ${({ theme }) => get(theme, `fontColor.primary`)};

  border: 1px solid ${({ theme }) => get(theme, `fontColor.primary`)};
  padding: 0.1rem 0.5rem;
  margin-top: 0.5rem;
  margin-left: 0.5rem;
  border-radius: 0.5rem;

  position: absolute;
  top: 0;
  left: 0;

  ${breakpointsMedia({
    xs: css`
      font-size: 1.5rem;
      line-height: 1.8rem;
    `,
    md: css`
      font-size: 2.375rem;
      line-height: 2.85rem;
    `,
  })}
`;
