import React from 'react';
import CardImage from './CardImage';
import CardViewInfo from './CardViewInfo';
import CardTitle from './CardITitle';
import { CardContainer } from './styles';
import { Box } from '../../layout/Box/styles';
import CardDestaque from './CardDestaque';

interface ICard {
  id: number;
  imagem: string;
  nome: string;
  descricao: string;
  destaque: boolean;
}

const Card = (card: ICard) => {
  const { imagem, nome, descricao, destaque } = card;

  return (
    <CardContainer isDestaque={destaque}>
      <CardImage src={imagem} alt={nome} />

      <Box width={{ xs: '100%', md: destaque ? '30%' : '100%' }}>
        {destaque && <CardDestaque />}

        <CardTitle label={nome} />

        {destaque && (
          <CardViewInfo description={descricao} isDestaque={destaque} />
        )}
      </Box>
    </CardContainer>
  );
};

export default Card;
