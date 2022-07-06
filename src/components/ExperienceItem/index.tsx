import React from 'react';

import Spacer from '../Spacer';

import {
    Container,
    Column,
    Title,
    Subtitle,
    Date
} from './styles';

export interface IExperience {
    startDate: string;
    endDate: string;
    title: string;
    subtitle: string;
    observation?: string;
}

const ExperienceItem: React.FC<IExperience> = (props) => {
    return (
        <Container>
            <Column>
                <Title>{props.title}</Title>
                <Spacer vertical={10} />
                <Subtitle>{props.subtitle}</Subtitle>
            </Column>

            <Date>{props.startDate} - {props.endDate} {props.observation ? `(${props.observation})` : ''}</Date>
        </Container>
    );
}

export default ExperienceItem;