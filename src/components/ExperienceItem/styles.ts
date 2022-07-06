import styled from 'styled-components';

export const Container = styled.div`
    display: flex;

    margin: 15px 0;

    @media (max-width: 900px) {
        justify-content: space-between;
    }
`;

export const Column = styled.div`
    display: flex;
    flex-direction: column;

    width: 50%;
`;

export const Title = styled.p`
    color: var(--text);

    font-size: 18px;
    font-family: var(--default-font-family);
    font-weight: bold;
`;

export const Subtitle = styled.p`
    color: var(--accent);

    font-size: 14px;
    font-family: var(--default-font-family);
`;

export const Date = styled.p`
    margin-top: 2px;

    color: var(--text);

    font-size: 14px;
    font-family: var(--default-font-family);
    text-align: right;
`;