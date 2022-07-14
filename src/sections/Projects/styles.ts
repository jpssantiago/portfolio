import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 350px;

    background: var(--background2);

    @media (max-width: 1600px) {
        padding: 60px 250px;
    }

    @media (max-width: 1400px) {
        padding: 60px 150px;
    }

    @media (max-width: 1200px) {
        padding: 60px 20px;
    }
`;

export const Title = styled.h1`
    color: var(--text);

    font-size: 24px;
    font-family: var(--default-font-family);
    font-weight: bold;
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 40px;
    
    @media (max-width: 1000px) {
        grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 700px) {
        display: flex;
        flex-direction: column;
    }
`;