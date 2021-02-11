import React from 'react';

import { Container } from './styles';

interface IProjetosProps {
  children?: React.ReactNode;
}

const Projetos = ({ children }: IProjetosProps) => {
  return <Container>{children}</Container>;
};

export default Projetos;
