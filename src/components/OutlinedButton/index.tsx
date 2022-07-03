import React from 'react';

import { Container, Text } from './styles';

interface Props {
    label?: string;
    onClick?: () => void;
    background?: string;
    color?: string;
}

const OutlinedButton: React.FC<Props> = ({ label = 'Button', onClick }) => {
    return (
        <Container onClick={onClick}>
            <Text>{label}</Text>
        </Container>
    );
}

export default OutlinedButton;