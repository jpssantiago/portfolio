import React from 'react';

import NavBar from '../../components/NavBar';
import Intro from '../../components/Intro';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Intro />
        </Container>
    );
}

export default Home;