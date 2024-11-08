import { getLocalStorageList } from '../utils/util';

function MyLists() {
    const watchedMovies = getLocalStorageList('watched');
    const toWatchMovies = getLocalStorageList('toWatch');

    return (
        <div className="container mx-auto">
        <h1 className="text-2xl font-bold">Filmes Assistidos</h1>
        {watchedMovies.map(movie => (
            <p key={movie.id}>{movie.title}</p>
        ))}

        <h1 className="text-2xl font-bold mt-4">Filmes para Ver Depois</h1>
        {toWatchMovies.map(movie => (
            <p key={movie.id}>{movie.title}</p>
        ))}
        </div>
    );
}

export default MyLists;
