// src/components/Footer.jsx
import React from 'react';
import styled from 'styled-components';

const FooterContainer = styled.footer`
    background-color: #333;
    color: white;
    text-align: center;
    padding: 2rem;
    margin-top: auto;
    `;

    const Footer = () => {
    return (
        <FooterContainer>
        <p>&copy; 2024 Portal Filmes. Todos os direitos reservados.</p>
        </FooterContainer>
    );
};

export default Footer;
