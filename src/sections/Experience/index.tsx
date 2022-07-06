import React from 'react';

import Spacer from '../../components/Spacer';
import ExperienceItem, { IExperience } from '../../components/ExperienceItem';

import {
    Container,
    Column,
    Title
} from './styles';

const education: IExperience[] = [
    {
        title: 'Bacharelado em Ciência da Computação',
        subtitle: 'Universidade Anhembi Morumbi',
        startDate: 'Janeiro 2019',
        endDate: 'Dezembro 2022',
        observation: 'matutino'
    }, {
        title: 'Ensino Médio integrado ao Técnico em Informática',
        subtitle: 'Instituto Técnico de Barueri',
        startDate: 'Janeiro 2016',
        endDate: 'Dezembro 2028',
    }
];

const experience: IExperience[] = [
    {
        title: 'Desenvolvedor Front-End',
        subtitle: 'izi.fit',
        startDate: 'Outubro 2021',
        endDate: 'Março 2022',
    }
];

const Experience: React.FC = () => {
    return (
        <Container>
            <Column>
                <Title>Educação</Title>
                <Spacer vertical={10} />
                {education.map((data, index) => (
                    <ExperienceItem
                        key={index}
                        startDate={data.startDate}
                        endDate={data.endDate}
                        title={data.title}
                        subtitle={data.subtitle}
                        observation={data.observation}
                    />
                ))}
            </Column>

            <Column>
                <Title>Experiência</Title>
                <Spacer vertical={10} />
                {experience.map((data, index) => (
                    <ExperienceItem
                        key={index}
                        startDate={data.startDate}
                        endDate={data.endDate}
                        title={data.title}
                        subtitle={data.subtitle}
                        observation={data.observation}
                    />
                ))}
            </Column>
        </Container>
    );
}

export default Experience;