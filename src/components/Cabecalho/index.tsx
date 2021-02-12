import React from 'react';
import { Link } from '../commons/Link';
import { Text } from '../commons/Text';

import { Content, MeContent, PagesContent } from './styles';

const Cabecalho = () => {
  return (
    <Content>
      <MeContent>
        <Text tag={'span'}>{'<ME />'}</Text>
      </MeContent>
      <PagesContent>
        <Link label={'Sobre Mim'} toUrl={'/me'} />
        <Link label={'Contato'} toUrl={'/contact'} />
      </PagesContent>
    </Content>
  );
};

export default Cabecalho;
