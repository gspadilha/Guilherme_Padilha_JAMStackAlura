import React from 'react';
import styled from 'styled-components';
import { Breakline } from '../src/components/commons/Breakline';

const ErrorContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100vh;
  text-align: center;
  line-height: 2rem;
`;

const FourOhFour: React.FC = () => {
  return (
    <ErrorContainer>
      Error 404 | Not Found (yet)
      <Breakline />
      You arrived too early...
      <Breakline />
      Você chegou muito cedo...
    </ErrorContainer>
  );
};

export default FourOhFour;
