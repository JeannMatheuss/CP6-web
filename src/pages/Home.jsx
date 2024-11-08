import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';
import MovieCard from '../components/MovieCard';
import Trailer from '../components/Trailer';
import { Link } from 'react-router-dom';
import { HomeStyled } from '../styles/HomeStyled'; // Certifique-se de ter esse arquivo de estilo

const API_KEY = 'SUA_API_KEY';
const API_URL = 'https://api.themoviedb.org/3';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);
    const [classicMovies, setClassicMovies] = useState([]);
    const [trailerUrl, setTrailerUrl] = useState('');

    useEffect(() => {
        // Pegar filmes populares
        axios
        .get(`${API_URL}/movie/popular?api_key=${API_KEY}`)
        .then((response) => setPopularMovies(response.data.results));

        // Pegar filmes que estão por vir
        axios
        .get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then((response) => setUpcomingMovies(response.data.results));

        // Pegar filmes clássicos - você pode escolher um filtro, por exemplo, filmes antigos
        axios
        .get(`${API_URL}/discover/movie?api_key=${API_KEY}&primary_release_date.lte=2000-01-01`)
        .then((response) => setClassicMovies(response.data.results));
    }, []);

    return (
        <HomeStyled>
        {/* Carrossel de filmes populares */}
        <section>
            <h2>Filmes Populares</h2>
            <Carousel movies={popularMovies} />
        </section>

        {/* Lançamentos */}
        <section>
            <h2>Lançamentos</h2>
            <div className="movie-list">
            {upcomingMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </section>

        {/* Clássicos */}
        <section>
            <h2>Filmes Clássicos</h2>
            <div className="movie-list">
            {classicMovies.map((movie) => (
                <MovieCard key={movie.id} movie={movie} />
            ))}
            </div>
        </section>

        {/* Trailer de filme */}
        <section>
            <h2>Trailer de Filme</h2>
            <Trailer trailerUrl={trailerUrl} setTrailerUrl={setTrailerUrl} />
        </section>
        </HomeStyled>
    );
}

export default Home;
