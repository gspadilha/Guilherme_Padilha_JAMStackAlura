import React from 'react';

import { Container, TextTitulo, TextSubtitulo } from './styles';

interface ICapaProps {
  children?: React.ReactNode;
}

const Capa = ({ children }: ICapaProps) => {
  return (
    <Container>
      <>
        <TextTitulo>GUILHERME PADILHA</TextTitulo>
        <TextSubtitulo>Portfólio</TextSubtitulo>
      </>
      {children}
    </Container>
  );
};

export default Capa;
