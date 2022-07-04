import styled from 'styled-components';

export const Container = styled.div`
    height: 55px;

    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: var(--accent);
    color: var(--background);

    border: 3px solid var(--accent);
    border-radius: 5px;

    cursor: pointer;
    transition: all .2s linear;

    &:hover {
        filter: brightness(130%);
    }
`;

export const Text = styled.p`
    font-size: 16px;
    font-family: var(--default-font-family);
    font-weight: 600;

    text-align: center;
`;