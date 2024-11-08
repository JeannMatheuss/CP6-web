import { Link } from 'react-router-dom';

function MovieCard({ movie }) {
    return (
        <div className="w-48">
        <Link to={`/movie/${movie.id}`}>
            <img
            src={`https://image.tmdb.org/t/p/w200${movie.poster_path}`}
            alt={movie.title}
            className="rounded-lg"
            />
            <h2 className="text-lg font-semibold">{movie.title}</h2>
        </Link>
        </div>
    );
}

export default MovieCard;
