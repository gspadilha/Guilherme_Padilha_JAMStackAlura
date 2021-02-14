import React from 'react';

import { Container } from './styles';

interface ISeparadorProps {
  children?: React.ReactNode;
}

const BarraHorizontal = ({ children }: ISeparadorProps) => {
  return <Container>{children}</Container>;
};

export default BarraHorizontal;
