import React from 'react';

import { Container } from './styles';

interface Props {
    horizontal?: number;
    vertical?: number;
}

const Spacer: React.FC<Props> = (props) => {
    return (
        <Container
            horizontal={props.horizontal}
            vertical={props.vertical}
        />
    );
}

export default Spacer;