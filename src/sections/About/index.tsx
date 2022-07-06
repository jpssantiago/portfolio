import React from 'react';

import Spacer from '../../components/Spacer';
import OutlinedButton from '../../components/OutlinedButton';
import Skill, { ISkill } from '../../components/Skill';

import {
    Container,
    Column,
    Title,
    Text,
    Grid
} from './styles';

const skills: ISkill[] = [
    {
        name: 'JavaScript',
        image: './images/javascript.png',
    }, {
        name: 'TypeScript',
        image: './images/typescript.svg',
    }, {
        name: 'React / Native',
        image: './images/react.png',
    }, {
        name: 'Next.js',
        image: './images/next.png',
    }, {
        name: 'Redux',
        image: './images/redux.png',
    }, {
        name: 'Flutter',
        image: './images/flutter.png',
    }, {
        name: 'Java',
        image: './images/java.png',
    }, {
        name: 'Python',
        image: './images/python.png',
    }, {
        name: 'C / C++',
        image: './images/c.png',
    }, {
        name: 'C#',
        image: './images/csharp.png',
    }
];

const About: React.FC = () => {
    return (
        <Container id="about">
            <Column>
                <Title>Lorem ipsum dolor sit amet</Title>
                <Spacer vertical={20} />
                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas quis feugiat metus. Vivamus sed porta lorem, at eleifend purus. Aenean vel sollicitudin nulla. Nam laoreet semper pretium. Aenean vitae purus lectus. Etiam vulputate mi sagittis velit vestibulum ultricies. Pellentesque finibus bibendum nunc vel luctus.</Text>
                <Spacer vertical={20} />
                <OutlinedButton label="Veja o meu currículo" onClick={() => alert('currículo')} width={260} />
            </Column>

            <Column>
                <Title>Minhas habilidades</Title>
                <Spacer vertical={20} />
                <Grid>
                    {skills.map(skill => (
                        <Skill key={skill.name} name={skill.name} image={skill.image} />
                    ))}
                </Grid>
            </Column>
        </Container>
    );
}

export default About;