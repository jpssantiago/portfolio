import React from 'react';

import NavBar from '../../components/NavBar';
import Intro from '../../sections/Intro';
import About from '../../sections/About';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <Intro />
            <About />
        </Container>
    );
}

export default Home;