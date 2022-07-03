import styled from 'styled-components';

interface Props {
    horizontal?: number;
    vertical?: number;
}

export const Container = styled.div`
    width: ${(props: Props) => props.horizontal || 0}px;
    height: ${(props: Props) => props.vertical || 0}px;
`;