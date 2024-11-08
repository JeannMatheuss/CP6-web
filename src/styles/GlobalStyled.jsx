// src/styles/GlobalStyled.jsx
import { createGlobalStyle } from "styled-components";

// Definir estilos globais
const GlobalStyled = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }

    body {
        font-family: 'Roboto', sans-serif;
        background-color: #111;
        color: white;
        line-height: 1.6;
        font-size: 16px;
    }

    h1, h2, h3 {
        font-family: 'Arial', sans-serif;
    }

    a {
        text-decoration: none;
        color: inherit;
    }
`;

export default GlobalStyled;
