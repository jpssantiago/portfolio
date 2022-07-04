import React from 'react';

import Spacer from '../Spacer';

import { Container, Image, Name } from './styles';

export interface ISkill {
    name: string;
    image: string;
}

const Skill: React.FC<ISkill> = ({ name, image }) => {
    return (
        <Container>
            <Image src={image} />
            <Spacer vertical={10} />
            <Name>{name}</Name>
        </Container>
    );
}

export default Skill;