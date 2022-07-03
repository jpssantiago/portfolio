import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 350px;

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;

    background: var(--background);

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

export const Text = styled.p`
    font-size: 40px;
    font-family: var(--default-font-family);
    font-weight: 800;

    color: var(--text);

    @media (max-width: 900px) {
        font-size: 30px;
    }

    @media (max-width: 600px) {
        font-size: 24px;
    }
`;

export const SecondaryText = styled.p`
    font-size: 32px;
    font-family: var(--default-font-family);
    font-weight: 800;

    color: var(--text);

    @media (max-width: 900px) {
        font-size: 20px;
    }
`;

export const Row = styled.div`
    display: flex;
`;