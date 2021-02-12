import styled, { css } from 'styled-components';
import get from 'lodash/get';

export const Container = styled.section`
  ${({ theme }) => css`
    background-image: url('${get(theme, `backgroundImageInverted`)}');
  `};
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
`;
