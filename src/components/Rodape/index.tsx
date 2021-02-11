import React from 'react';

import { Container, Content } from './styles';

interface IRodapeProps {
  children?: React.ReactNode;
}

const Rodape = ({ children }: IRodapeProps) => {
  return (
    <Container>
      <Content>{children}</Content>
    </Container>
  );
};

export default Rodape;
