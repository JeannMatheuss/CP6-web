// src/styles/HomeStyled.js
import styled from 'styled-components';

export const HomeStyled = styled.div`
    .movie-list {
        display: flex;
        flex-wrap: wrap;
        gap: 20px;
    }

    section {
        margin-bottom: 40px;
    }

    h2 {
        font-size: 2rem;
        margin-bottom: 20px;
        text-align: center;
    }

    .trailer {
        text-align: center;
        margin-top: 20px;
    }

    input {
        padding: 10px;
        font-size: 1rem;
        margin-bottom: 20px;
        width: 80%;
        max-width: 400px;
        display: block;
        margin-left: auto;
        margin-right: auto;
    }

    iframe {
        width: 80%;
        max-width: 640px;
        height: 360px;
        margin: 20px auto;
        display: block;
    }
`;
