import styled, { css } from 'styled-components';
import { breakpointsMedia } from '../../theme/utils/breakpointsMedia';
import get from 'lodash/get';

export const Container = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  background-color: ${({ theme }) => get(theme, `backgroundColor`)};
  color: ${({ theme }) => get(theme, `fontColor`)};
`;
