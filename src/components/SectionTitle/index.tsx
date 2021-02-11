import React from 'react';
import { Text } from '../commons/Text';

import { Container } from './styles';

interface ISectionTitleProps {
  label: string;
}

const SectionTitle = ({ label }: ISectionTitleProps) => {
  return (
    <Container>
      <Text tag={'p'}>{label}</Text>
    </Container>
  );
};

export default SectionTitle;
