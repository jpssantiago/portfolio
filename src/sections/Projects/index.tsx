import React from 'react';

import Spacer from '../../components/Spacer';
import ProjectCard from '../../components/ProjectCard';

import {
    Container,
    Title,
    Grid
} from './styles';

const Projects: React.FC = () => {
    return (
        <Container id="work">
            <Title>Meus projetos</Title>
            <Spacer vertical={20} />
            <Grid>
                <ProjectCard link="link" />
                <ProjectCard link="link" />
                <ProjectCard />
                <ProjectCard />
                <ProjectCard link="link" />
                <ProjectCard />
            </Grid>
        </Container>
    );
}

export default Projects;