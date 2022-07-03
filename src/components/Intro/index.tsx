import React from 'react';

import Spacer from '../Spacer';
import FilledButton from '../FilledButton';
import OutlinedButton from '../OutlinedButton';

import { Container, Text, SecondaryText, Row } from './styles';

const Intro: React.FC = () => {
    return (
        <Container id="intro">
            <Text>OLÁ 👋 ME CHAMO <mark>JOÃO</mark> E SOU UM DESENVOLVEDOR.</Text>
            <Spacer vertical={50} />
            <SecondaryText>EU DESENVOLVO APLICAÇÕES <mark>WEB</mark> E <mark>MOBILE</mark> UTILIZANDO <mark>REACT</mark>, <mark>REACT NATIVE</mark>, <mark>FLUTTER</mark> E <mark>JAVA</mark>.</SecondaryText>
            <Spacer vertical={50} />
            <SecondaryText>ENTRE EM CONTATO COMIGO.</SecondaryText>
            <Spacer vertical={50} />
            <Row>
                <FilledButton label="Envie uma mensagem" onClick={() => alert('mensagem')} />
                <Spacer horizontal={20} />
                <OutlinedButton label="Veja meus projetos" onClick={() => alert('projetos')} />
            </Row>
        </Container>
    );
}

export default Intro;