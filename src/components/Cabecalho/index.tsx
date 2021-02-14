import React from 'react';
import { Link } from '../commons/Link';

import { Content, MeContent, PagesContent } from './styles';

const Cabecalho = () => {
  return (
    <Content>
      <MeContent>
        <Link label={'<ME />'} toUrl={'/'} />
      </MeContent>

      <PagesContent>
        <Link label={'Sobre Mim'} toUrl={'/me'} />
        <Link label={'Contato'} toUrl={'/contact'} />
      </PagesContent>
    </Content>
  );
};

export default Cabecalho;
