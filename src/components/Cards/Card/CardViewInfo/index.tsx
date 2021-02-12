import React from 'react';

import { CardViewInfoContainer } from './styles';

interface ICardViewInfoProps {
  description: string;
  isDestaque: boolean;
}

const CardText = ({ description, isDestaque }: ICardViewInfoProps) => {
  return (
    <CardViewInfoContainer isDestaque={isDestaque}>
      {description}
    </CardViewInfoContainer>
  );
};

export default CardText;
