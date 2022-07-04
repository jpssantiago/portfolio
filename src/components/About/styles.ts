import styled from 'styled-components';

export const Container = styled.div`
    padding: 30px 350px;

    display: flex;
    gap: 40px;
    
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

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;

    @media (max-width: 900px) {
        width: 100%;
    }
`;

export const Title = styled.h1`
    color: var(--text);

    font-size: 24px;
    font-family: var(--default-font-family);
    font-weight: bold;
`;

export const Text = styled.p`
    color: var(--text);

    line-height: 30px;
    font-family: var(--default-font-family);
`;

export const Grid = styled.div`
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    grid-row-gap: 40px;

    @media (max-width: 900px) {
        grid-template-columns: repeat(4, 1fr);
    }
    
    @media (max-width: 750px) {
        grid-template-columns: repeat(3, 1fr);
    }
    
    @media (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
    }
`;