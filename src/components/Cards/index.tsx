import React from 'react';
import Card from './Card';

import { GridSystem } from '../layout/Grid/styles';

interface ICard {
  id: number;
  imagem: string;
  nome: string;
  descricao: string;
  destaque: boolean;
}

interface ICardsProps {
  cards: Array<ICard>;
}

const Cards = ({ cards }: ICardsProps) => {
  return (
    <GridSystem.Container>
      <GridSystem.Row>
        {cards.map(card => {
          return (
            <GridSystem.Col
              key={card.id}
              value={{ xs: 12, md: card.destaque ? 12 : 4 }}
              order={{ xs: card.destaque, md: card.destaque }}
            >
              <Card {...card} />
            </GridSystem.Col>
          );
        })}
      </GridSystem.Row>
    </GridSystem.Container>
  );
};

export default Cards;
