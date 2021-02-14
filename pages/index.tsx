import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import TituloSecao from '../src/components/TituloSecao';
import Cards from '../src/components/Cards';
import { Link } from '../src/components/commons/Link';
import BarraHorizontal from '../src/components/BarraHorizontal';
import Rodape from '../src/components/Rodape';

const projetos = [
  {
    id: 1,
    imagem: 'https://via.placeholder.com/250x400.png?text=Projeto1',
    nome: 'Projeto1',
    descricao: 'Teste Projeto 1',
    destaque: false,
  },
  {
    id: 2,
    imagem: 'https://via.placeholder.com/250x400.png?text=Projeto2',
    nome: 'Projeto2',
    descricao:
      'Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 Teste Projeto 2 ',
    destaque: true,
  },
  {
    id: 3,
    imagem: 'https://via.placeholder.com/250x400.png?text=Projeto3',
    nome: 'Projeto3',
    descricao: 'Teste Projeto 3',
    destaque: false,
  },
  {
    id: 4,
    imagem: 'https://via.placeholder.com/250x400.png?text=Projeto4',
    nome: 'Projeto4',
    descricao: 'Teste Projeto 4',
    destaque: false,
  },
];

const Home = () => {
  return (
    <>
      <Capa />

      <BarraHorizontal>
        <Cabecalho />
      </BarraHorizontal>

      <Projetos>
        <TituloSecao label="MEUS PROJETOS" />
        <Cards cards={projetos} />
      </Projetos>

      <BarraHorizontal>
        <Rodape>
          <Link
            label={'/icons/twitter.svg'}
            toUrl={'https://twitter.com/gspadilha_'}
            isImage={true}
          />

          <Link
            label={'/icons/github.svg'}
            toUrl={'https://github.com/gspadilha'}
            isImage={true}
          />
        </Rodape>
      </BarraHorizontal>
    </>
  );
};

export default Home;
