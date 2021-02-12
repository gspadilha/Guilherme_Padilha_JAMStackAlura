import React from 'react';

import { Container } from './styles';

interface IRodapeIconsProps {
  children?: React.ReactNode;
}

const RodapeIcons = ({ children }: IRodapeIconsProps) => {
  return <Container>{children}</Container>;
};

export default RodapeIcons;
