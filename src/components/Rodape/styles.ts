import styled from 'styled-components';

export const Container = styled.footer`
  background-color: ${({ theme }) => theme.primary};
  height: 100%;

  display: flex;
  align-items: center;
  justify-content: center;

  a {
    padding: 0.5rem 0.75rem;
  }
`;
