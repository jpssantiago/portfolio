import styled from 'styled-components';

export const Container = styled.div`
    position: relative;

    width: 100%;

    display: flex;
    flex-direction: column;

    background: var(--background);

    border-radius: 5px;

    &:hover > :last-child {
        position: absolute;
        top: 0;
        left: 0;
        
        width: 100%;
        height: 100%;
        
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 20px;
        
        background: rgba(0, 0, 0, .5);
        backdrop-filter: blur(2px);
        
        border-radius: 5px;
    }
`;

export const Hover = styled.div`
    display: none;
`;

export const Image = styled.img`
    object-fit: cover;

    width: 100%;
    height: 180px;

    background: grey;

    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
`;

export const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;

    padding: 20px;
`;

export const Title = styled.h1`
    color: var(--text);

    font-size: 20px;
    font-family: var(--default-font-family);
    font-weight: bold;
`;

export const Text = styled.p`
    color: var(--text2);

    font-size: 14px;
    font-family: var(--default-font-family);
`;