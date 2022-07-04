import React from 'react';

import { Container, Text } from './styles';

interface Props {
    label?: string;
    onClick?: () => void;
    background?: string;
    color?: string;
    width?: number;
}

const OutlinedButton: React.FC<Props> = ({ label = 'Button', onClick, width }) => {
    return (
        <Container onClick={onClick} width={width}>
            <Text>{label}</Text>
        </Container>
    );
}

export default OutlinedButton;