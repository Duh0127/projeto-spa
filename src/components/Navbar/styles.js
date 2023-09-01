import styled from 'styled-components';

export const Header = styled.header`
    display: flex;
    justify-content: space-between;
    background-color: #242424;
    width: 100%;
    height: 100px;
    padding: 0 3rem;
`;

export const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 1rem;
    cursor: pointer;
`;
export const LogoImg = styled.img`
    height: 100%;
    border-radius: 50%;
`;
export const LogoText = styled.h1`
    color: #fff;
    font-size: 1rem;
    font-weight: bold;
    font-family: Verdana, Geneva, Tahoma, sans-serif;
`;


export const Navbar = styled.nav`
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
`;

export const NavbarLink = styled.a`
    display: flex;
    align-items: center;
    color: #fff;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    font-size: 1.2rem;
    font-weight: bold;
    &:hover {
        color: #000;
        background-color: #fff;
    }
`;