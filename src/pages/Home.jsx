import { useState, useEffect } from 'react';
import axios from 'axios';
import Carousel from '../components/Carousel';

const API_KEY = 'SUA_API_KEY';
const API_URL = 'https://api.themoviedb.org/3';

function Home() {
    const [popularMovies, setPopularMovies] = useState([]);
    const [upcomingMovies, setUpcomingMovies] = useState([]);

    useEffect(() => {
    axios.get(`${API_URL}/movie/popular?api_key=${API_KEY}`)
        .then(response => setPopularMovies(response.data.results))
        .catch(error => console.error(error));

    axios.get(`${API_URL}/movie/upcoming?api_key=${API_KEY}`)
        .then(response => setUpcomingMovies(response.data.results))
        .catch(error => console.error(error));
    }, []);

    return (
    <div className="container mx-auto">
        <h1 className="text-2xl font-bold my-4">Filmes Populares</h1>
        <Carousel movies={popularMovies} />

        <h1 className="text-2xl font-bold my-4">Filmes que Estão por Vir</h1>
        <Carousel movies={upcomingMovies} />
    </div>
    );
}

export default Home;
