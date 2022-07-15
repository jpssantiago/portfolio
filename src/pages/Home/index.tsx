import React from 'react';

import NavBar from '../../components/NavBar';

import Intro from '../../sections/Intro';
import About from '../../sections/About';
import Experience from '../../sections/Experience';
import Projects from '../../sections/Projects';
import Contact from '../../sections/Contact';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            
            <Intro />
            <About />
            <Experience />
            <Projects />
            <Contact />
        </Container>
    );
}

export default Home;