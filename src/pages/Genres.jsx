// src/pages/Genres.jsx
import React, { useState, useEffect } from "react";
import axios from "axios";
import MovieCard from "../components/MovieCard"; 
import { Link } from "react-router-dom";
import GenresStyled from "../styles/GenresStyled"; // Certifique-se de que o caminho está correto


const API_KEY = "SUA_API_KEY";
const API_URL = "https://api.themoviedb.org/3";

const Genres = () => {
    const [genres, setGenres] = useState([]);
    const [selectedGenre, setSelectedGenre] = useState(null);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(response => setGenres(response.data.genres))
        .catch(error => console.error("Error fetching genres:", error));
    }, []);

    useEffect(() => {
        if (selectedGenre) {
        axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${selectedGenre}`)
            .then(response => setMovies(response.data.results))
            .catch(error => console.error("Error fetching movies:", error));
        }
    }, [selectedGenre]);

    return (
        <div className="genres-container">
        <GenresStyled /> {/* Estilo aplicado */}
        <h1>Escolha um Gênero</h1>
        
        <div className="genres-list">
            {genres.map(genre => (
            <button
                key={genre.id}
                onClick={() => setSelectedGenre(genre.id)}
                className="genre-button"
            >
                {genre.name}
            </button>
            ))}
        </div>

        {selectedGenre && (
            <div className="movies-container">
            <h2>Filmes de {genres.find(genre => genre.id === selectedGenre)?.name}</h2>
            <div className="movies-list">
                {movies.map(movie => (
                <MovieCard key={movie.id} movie={movie} />
                ))}
            </div>
            </div>
        )}

        <Link to="/" className="back-to-home">Voltar para a Home</Link>
        </div>
    );
};

export default Genres;
