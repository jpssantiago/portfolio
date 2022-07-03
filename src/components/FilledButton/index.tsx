import React from 'react';

import { Container, Text } from './styles';

interface Props {
    label?: string;
    onClick?: () => void;
}

const FilledButton: React.FC<Props> = ({ label = 'Button', onClick }) => {
    return (
        <Container onClick={onClick}>
            <Text>{label}</Text>
        </Container>
    );
}

export default FilledButton;