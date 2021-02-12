import React from 'react';

import { Container } from './styles';

interface ISeparadorProps {
  children?: React.ReactNode;
}

const SeparadorHorizontal = ({ children }: ISeparadorProps) => {
  return <Container>{children}</Container>;
};

export default SeparadorHorizontal;
