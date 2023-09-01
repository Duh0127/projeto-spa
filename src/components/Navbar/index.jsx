import React from 'react';
import * as S from './styles';
import { useNavigate } from 'react-router-dom';


export default function Navbar() {
    const navigate = useNavigate();

    const handleHomeClick = () => {
        navigate('/');
    }

    return (
        <S.Header>
            <S.LogoDiv onClick={handleHomeClick}>
                <S.LogoImg src="https://www.github.com/duh0127.png" alt="Logo do meu site" />
                <S.LogoText>551763</S.LogoText>
            </S.LogoDiv>
            <S.Navbar>
                    <S.NavbarLink href="/">Home</S.NavbarLink>
                    <S.NavbarLink href="/produtos">Produtos</S.NavbarLink>
                    <S.NavbarLink href="/produtos/editar/1">Editar Produto 1</S.NavbarLink>
                </S.Navbar>
        </S.Header>
    );
}