import React from 'react';
import CardImage from './CardImage';
import CardText from './CardIText';
import CardTitle from './CardITitle';
import { CardContainer } from './styles';
import { Box } from '../../layout/Box/styles';

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
      <Box
        width={{ xs: '100%', md: destaque ? '30%' : '100%' }}
        display="flex"
        flexDirection="column"
        alignItems={{ xs: 'center', md: destaque ? 'flex-start' : 'center' }}
        justifyContent={{
          xs: 'center',
          md: destaque ? 'flex-start' : 'center',
        }}
      >
        <CardTitle label={nome} />
        {destaque && <CardText description={descricao} isDestaque={destaque} />}
      </Box>
    </CardContainer>
  );
};

export default Card;
