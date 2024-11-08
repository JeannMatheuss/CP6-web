// src/styles/GenresStyled.js
import { createGlobalStyle } from "styled-components";

const GenresStyled = createGlobalStyle`
    .genres-container {
        padding: 20px;
        text-align: center;
        background-color: #1a1a1a;
        color: #fff;
    }

    .genres-list {
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin-bottom: 20px;
    }

    .genre-button {
        background-color: #333;
        color: #fff;
        padding: 10px 20px;
        margin: 5px;
        border: none;
        cursor: pointer;
        border-radius: 5px;
        transition: background-color 0.3s ease;
    }

    .genre-button:hover {
        background-color: #555;
    }

    .movies-container {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }

    .back-to-home {
        display: inline-block;
        margin-top: 20px;
        color: #fff;
        text-decoration: none;
        background-color: #333;
        padding: 10px 20px;
        border-radius: 5px;
    }

    .back-to-home:hover {
        background-color: #555;
    }
`;

export default GenresStyled;
