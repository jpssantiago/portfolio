import styled from 'styled-components';

export const Container = styled.div`
    position: absolute;
    width: 100%;
    top: 0;
    left: 0;
    right: 0;
    z-index: 9999;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px 350px;

    background: var(--background);

    @media (max-width: 1600px) {
        padding: 10px 250px;
    }

    @media (max-width: 1400px) {
        padding: 10px 150px;
    }

    @media (max-width: 1200px) {
        padding: 10px 20px;
    }

    @media (max-width: 900px) {
        position: static;
        
        display: flex;
        justify-content: center;
    }
`;

export const Logo = styled.h1`
    color: var(--text);
    font-family: var(--logo-font-family);
`;

export const Nav = styled.nav`
    height: 100%;

    @media (max-width: 900px) {
        background: var(--background);

        position: fixed;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 50px;
        
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
`;

export const Link = styled.a`
    padding: 18px 30px;

    text-decoration: none;
    color: var(--text2);
    font-family: var(--default-font-family);

    height: 100%;

    border-bottom: 3px solid transparent;
    transition: all .15s linear;
    
    outline: none;
    -webkit-tap-highlight-color: transparent;
    -webkit-touch-callout: none;
    -webkit-user-select: none;
    -khtml-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;
    user-select: none;
    
    &:hover, &.active-link {
        border-bottom: 3px solid var(--green);

        color: var(--text);
    }

    @media (max-width: 900px) {
        padding: 18px 0;
    }

    @media (max-width: 500px) {
        font-size: 12px;
    }
`;