import React from 'react';
import { Link } from '../commons/Link';
import { Text } from '../commons/Text';

import { Container, Content, MeContent, PagesContent } from './styles';

const Cabecalho = () => {
  return (
    <Container>
      <Content>
        <MeContent>
          <Text tag={'span'}>{'<ME />'}</Text>
        </MeContent>
        <PagesContent>
          <Text tag={'span'}>
            <Link label={'Sobre Mim'} toUrl={'/me'} />
          </Text>
          <Text tag={'span'}>
            <Link label={'Contato'} toUrl={'/contact'} />
          </Text>
        </PagesContent>
      </Content>
    </Container>
  );
};

export default Cabecalho;
