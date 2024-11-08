import React, { useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from '../components/MovieCard';

const API_KEY = 'SUA_API_KEY';  // Substitua com sua chave
const API_URL = 'https://api.themoviedb.org/3';

function Home() {
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        const fetchMovies = async () => {
        const response = await axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`);
        setMovies(response.data.results);
        };
        fetchMovies();
    }, []);

    return (
        <div>
        <h1>Filmes Populares</h1>
        <div className="movie-list">
            {movies.map(movie => (
            <MovieCard key={movie.id} movie={movie} />
            ))}
        </div>
        </div>
    );
}

export default Home;
