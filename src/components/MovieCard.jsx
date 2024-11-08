// src/components/MovieCard.jsx
import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
    background-color: #222;
    padding: 1rem;
    border-radius: 8px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.7);
    width: 250px;
    margin: 1rem;
    transition: transform 0.3s;

    &:hover {
        transform: scale(1.05);
    }

    img {
        width: 100%;
        border-radius: 4px;
    }

    h3 {
        color: #f5c518;
        font-size: 1.2rem;
        margin-top: 1rem;
    }

    p {
        color: #ccc;
        font-size: 1rem;
        margin-top: 0.5rem;
    }
`;

const MovieCard = ({ movie }) => {
    return (
        <Card>
        <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} alt={movie.title} />
        <h3>{movie.title}</h3>
        <p>{movie.overview}</p>
        </Card>
    );
};

export default MovieCard;
