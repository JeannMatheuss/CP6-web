import React, { useState, useEffect } from 'react';
import MovieCard from '../components/MovieCard';
import { MyListsStyled } from '../styles/MyListsStyled';

function MyLists() {
    const [favorites, setFavorites] = useState([]);
    const [toWatch, setToWatch] = useState([]);
    const [watched, setWatched] = useState([]);

    useEffect(() => {
        // Carregar listas do localStorage ao carregar a página
        const savedFavorites = JSON.parse(localStorage.getItem('favorites')) || [];
        const savedToWatch = JSON.parse(localStorage.getItem('toWatch')) || [];
        const savedWatched = JSON.parse(localStorage.getItem('watched')) || [];

        setFavorites(savedFavorites);
        setToWatch(savedToWatch);
        setWatched(savedWatched);
    }, []);

    const saveToLocalStorage = (key, data) => {
        localStorage.setItem(key, JSON.stringify(data));
    };

    const addToList = (movie, list, setList, storageKey) => {
        const updatedList = [...list, movie];
        setList(updatedList);
        saveToLocalStorage(storageKey, updatedList);
    };

    const removeFromList = (movieId, list, setList, storageKey) => {
        const updatedList = list.filter((movie) => movie.id !== movieId);
        setList(updatedList);
        saveToLocalStorage(storageKey, updatedList);
    };

    return (
        <MyListsStyled>
        <section>
            <h2>Favoritos</h2>
            <div className="movie-list">
            {favorites.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
                onRemove={() => removeFromList(movie.id, favorites, setFavorites, 'favorites')}
                />
            ))}
            </div>
        </section>

        <section>
            <h2>Quero Assistir</h2>
            <div className="movie-list">
            {toWatch.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
                onRemove={() => removeFromList(movie.id, toWatch, setToWatch, 'toWatch')}
                />
            ))}
            </div>
        </section>

        <section>
            <h2>Assistidos</h2>
            <div className="movie-list">
            {watched.map((movie) => (
                <MovieCard
                key={movie.id}
                movie={movie}
                onRemove={() => removeFromList(movie.id, watched, setWatched, 'watched')}
                />
            ))}
            </div>
        </section>
        </MyListsStyled>
    );
}

export default MyLists;
