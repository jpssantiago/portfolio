import styled from 'styled-components';

export const Container = styled.div`
    padding: 60px 350px;

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

    @media (max-width: 900px) {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
`;

export const Text = styled.p`
    font-size: 40px;
    font-family: var(--default-font-family);
    font-weight: 800;

    /* width: 80%; */

    color: var(--text);

    @media (max-width: 900px) {
        font-size: 30px;

        width: 100%;
        text-align: center;
    }

    @media (max-width: 600px) {
        font-size: 24px;
    }
`;

export const SecondaryText = styled.p`
    font-size: 32px;
    font-family: var(--default-font-family);
    font-weight: 800;

    /* width: 80%; */

    color: var(--text);

    @media (max-width: 900px) {
        font-size: 20px;

        width: 100%;
        text-align: center;
    }
`;

export const Image = styled.img`
    margin-left: 40px;
    height: 400px;

    @media (max-width: 1000px) {
        display: none;
    }
`;

export const Row = styled.div`
    display: flex;

    &.first-row {
        height: 100%;

        justify-content: center;
        align-items: center;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    @media (max-width: 900px) {
        align-items: center;
    }
`;