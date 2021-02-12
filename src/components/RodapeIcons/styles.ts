import styled from 'styled-components';
import get from 'lodash/get';

export const Container = styled.section`
  background-color: ${({ theme }) => get(theme, `primary`)};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0.5rem 0.75rem;
  }
`;
