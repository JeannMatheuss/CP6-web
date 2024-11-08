import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_KEY = 'SUA_API_KEY';
const API_URL = 'https://api.themoviedb.org/3';

function MovieDetails() {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);

    useEffect(() => {
        axios.get(`${API_URL}/movie/${id}?api_key=${API_KEY}&append_to_response=credits,videos`)
        .then(response => setMovie(response.data))
        .catch(error => console.error(error));
    }, [id]);

    if (!movie) return <p>Loading...</p>;

    const trailer = movie.videos.results.find(video => video.type === 'Trailer');

    return (
        <div className="container mx-auto">
        <h1 className="text-3xl font-bold">{movie.title}</h1>
        <p>{movie.overview}</p>
        <p>Avaliação: {movie.vote_average}</p>
        <p>Data de Lançamento: {movie.release_date}</p>

        <h2 className="text-2xl mt-4">Elenco</h2>
        <ul>
            {movie.credits.cast.slice(0, 5).map(member => (
            <li key={member.cast_id}>{member.name} como {member.character}</li>
            ))}
        </ul>

        {trailer && (
            <div>
            <h2 className="text-2xl mt-4">Trailer</h2>
            <iframe
                width="560"
                height="315"
                src={`https://www.youtube.com/embed/${trailer.key}`}
                title={movie.title}
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
            ></iframe>
            </div>
        )}
        </div>
    );
}

export default MovieDetails;
