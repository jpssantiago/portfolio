import styled from 'styled-components';

export const Container = styled.div`
    height: 55px;

    padding: 0 20px;

    display: flex;
    justify-content: center;
    align-items: center;

    background: transparent;
    color: var(--accent);

    border: 3px solid var(--accent);
    border-radius: 5px;

    cursor: pointer;
    transition: all .2s linear;

    &:hover {
        background: rgba(3, 204, 144, .2);
    }
`;

export const Text = styled.p`
    font-size: 16px;
    font-family: var(--default-font-family);
    font-weight: 600;
`;