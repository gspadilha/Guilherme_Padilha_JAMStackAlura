import React from 'react';
import { Text } from '../commons/Text';

import { Container } from './styles';

interface ISectionTitleProps {
  label: string;
}

const TituloSecao = ({ label }: ISectionTitleProps) => {
  return <Container>{label}</Container>;
};

export default TituloSecao;
