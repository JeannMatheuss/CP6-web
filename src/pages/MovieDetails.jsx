// src/pages/MovieDetails.jsx
import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';

const API_KEY = 'SUA_API_KEY'; // Substitua com sua chave da API
const API_URL = 'https://api.themoviedb.org/3';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        const fetchMovieDetails = async () => {
        const response = await axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}`);
        setMovie(response.data);
        };
        fetchMovieDetails();
    }, [id]);

    if (!movie) return <div>Loading...</div>;

    return (
        <div>
        <h1>{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Release Date: {movie.release_date}</p>
        {/* Exiba outras informações, como elenco, trailer, etc. */}
        </div>
    );
}

export default MovieDetails;
