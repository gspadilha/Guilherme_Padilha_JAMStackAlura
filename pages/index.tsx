import React from 'react';
import Capa from '../src/components/Capa';
import Cabecalho from '../src/components/Cabecalho';
import Projetos from '../src/components/Projetos';
import SectionTitle from '../src/components/SectionTitle';
import Cards from '../src/components/Cards';
import Rodape from '../src/components/Rodape';
import { Link } from '../src/components/commons/Link';
import { Box } from '../src/components/layout/Box/styles';

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
    descricao: 'Teste Projeto 2',
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
      <Cabecalho />
      <Projetos>
        <SectionTitle label="MEUS PROJETOS" />
        <Cards cards={projetos} />
      </Projetos>
      <Rodape>
        <Box display="flex" alignItems="center" justifyContent="center">
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
        </Box>
      </Rodape>
    </>
  );
};

export default Home;
