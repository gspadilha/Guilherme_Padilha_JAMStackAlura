import React from 'react';

import { CardTitleContainer } from './styles';

interface ICardTitle {
  label: string;
}

const CardTitle = ({ label }: ICardTitle) => {
  return <CardTitleContainer>{label}</CardTitleContainer>;
};

export default CardTitle;
