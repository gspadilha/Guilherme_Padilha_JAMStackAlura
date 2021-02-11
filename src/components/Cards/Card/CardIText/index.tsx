import React from 'react';

import { CardTextContainer } from './styles';

interface ICardText {
  description: string;
  isDestaque: boolean;
}

const CardText = ({ description, isDestaque }: ICardText) => {
  return (
    <CardTextContainer isDestaque={isDestaque}>{description}</CardTextContainer>
  );
};

export default CardText;
