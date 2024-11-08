import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useOutletContext } from 'react-router-dom';

const API_KEY = 'SUA_API_KEY';
const API_URL = 'https://api.themoviedb.org/3';

function Genres() {
    const [genres, setGenres] = useState([]);
    const [movies, setMovies] = useState([]);

    useEffect(() => {
        axios.get(`${API_URL}/genre/movie/list?api_key=${API_KEY}`)
        .then(response => setGenres(response.data.genres))
        .catch(error => console.error(error));
    }, []);

    const fetchMoviesByGenre = (genreId) => {
        axios.get(`${API_URL}/discover/movie?api_key=${API_KEY}&with_genres=${genreId}`)
        .then(response => setMovies(response.data.results))
        .catch(error => console.error(error));
    };

    return (
        <div>
        <h1 className="text-2xl font-bold">Escolha um Gênero</h1>
        <ul className="flex space-x-4">
            {genres.map(genre => (
            <li key={genre.id} onClick={() => fetchMoviesByGenre(genre.id)} className="cursor-pointer">
                {genre.name}
            </li>
            ))}
        </ul>
        <div className="grid grid-cols-4 gap-4 mt-4">
            {movies.map(movie => (
            <div key={movie.id} className="w-48">
                <img src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title} />
                <p>{movie.title}</p>
            </div>
            ))}
        </div>
        </div>
    );
}

export default Genres;
