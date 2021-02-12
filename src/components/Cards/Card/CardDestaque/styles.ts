import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../../../theme/utils/breakpointsMedia';

export const CardDestaqueContainer = styled.span`
  font-family: 'Fira Sans Condensed';
  font-style: normal;
  font-weight: 300;
  font-size: 38px;
  line-height: 46px;
  text-transform: capitalize;

  background: #ffffff;
  border: 1px solid #000000;
  padding: 0.1rem 0.5rem;
  margin-top: 0.1rem;
  margin-left: 0.1rem;
  border-radius: 3px;

  position: absolute;
  top: 0;
  left: 0;

  color: #000000;

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
