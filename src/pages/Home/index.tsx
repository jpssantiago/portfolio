import React from 'react';

import NavBar from '../../components/NavBar';

import { Container } from './styles';

const Home: React.FC = () => {
    return (
        <Container>
            <NavBar />
            <h1>Content</h1>
        </Container>
    );
}

export default Home;