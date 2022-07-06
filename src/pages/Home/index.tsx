import React from 'react';

import NavBar from '../../components/NavBar';

import Intro from '../../sections/Intro';
import About from '../../sections/About';
import Experience from '../../sections/Experience';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            
            <Intro />
            <About />
            <Experience />
        </Container>
    );
}

export default Home;