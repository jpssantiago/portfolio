import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Image = styled.img`
    width: 48px;
    height: 48px;

    filter: grayscale(100%);
    transition: all .2s linear;
    z-index: 10;

    fit: cover;

    &:hover {
        filter: none;
    }
`;

export const Name = styled.p`
    color: var(--text);
    
    font-family: var(--default-font-family);
    text-align: center;
    text-overflow: ellipsis;
    overflow: hidden;
`;