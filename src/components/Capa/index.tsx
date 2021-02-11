import React from 'react';
import { Text } from '../commons/Text';

import { Container, TextTitulo, TextSubtitulo } from './styles';

interface ICapaProps {
  children?: React.ReactNode;
}

const Capa = ({ children }: ICapaProps) => {
  return (
    <Container>
      <div>
        <Text tag={'p'}>
          <TextTitulo>GUILHERME PADILHA</TextTitulo>
        </Text>
        <Text tag={'p'}>
          <TextSubtitulo>Portfólio</TextSubtitulo>
        </Text>
      </div>
      {children}
    </Container>
  );
};

export default Capa;
