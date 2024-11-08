// src/components/Header.jsx
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #333;
    padding: 1rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    z-index: 10;
`;

const Logo = styled.h1`
    color: #f5c518;
    font-size: 1.8rem;
`;

const Nav = styled.nav`
    ul {
        list-style: none;
        display: flex;
        margin: 0;
        padding: 0;
    }

    li {
        margin: 0 1rem;
    }

    a {
        color: #fff;
        font-size: 1.1rem;
        text-decoration: none;
        transition: color 0.3s;

        &:hover {
            color: #f5c518;
        }
    }
`;

const Header = () => {
    return (
        <HeaderContainer>
            <Logo>Portal Filmes</Logo>
            <Nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/genres">Gêneros</Link>
                    </li>
                    <li>
                        <Link to="/my-lists">Minhas Listas</Link>
                    </li>
                </ul>
            </Nav>
        </HeaderContainer>
    );
};

export default Header;
