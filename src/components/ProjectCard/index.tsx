import React from 'react';

import Spacer from '../Spacer';
import FilledButton from '../FilledButton';
import OutlinedButton from '../OutlinedButton';

import SVG from '../../assets/svg/project.svg';

import {
    Container,
    Hover,
    Image,
    Wrapper,
    Title,
    Text
} from './styles';

interface Props {
    image?: string;
    link?: string;
}

const ProjectCard: React.FC<Props> = ({ image, link }) => {
    return (
        <Container>
            <Image src={image || SVG} />
            <Wrapper>
                <Title>Lorem ipsum dolor sit amet</Title>
                <Spacer vertical={20} />
                <Text>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</Text>
                <Spacer vertical={20} />
                <Text>#react #javascript #typescript</Text>
            </Wrapper>

            <Hover>
               <FilledButton
                    label="Ver detalhes"
                    onClick={() => alert('ver detalhes')}
               />

               {link && (
                <OutlinedButton
                    label="Ver projeto"
                    onClick={() => alert('ver projeto')}
                />
               )}
            </Hover>
        </Container>
    );
}

export default ProjectCard;