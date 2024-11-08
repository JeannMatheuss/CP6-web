import React from 'react';

function Trailer({ trailerUrl, setTrailerUrl }) {
    return (
        <div className="trailer">
        <input
            type="text"
            value={trailerUrl}
            onChange={(e) => setTrailerUrl(e.target.value)}
            placeholder="Cole o link do trailer"
        />
        {trailerUrl && (
            <iframe
            width="560"
            height="315"
            src={`https://www.youtube.com/embed/${trailerUrl}`}
            frameBorder="0"
            allowFullScreen
            title="Trailer"
            ></iframe>
        )}
        </div>
    );
}

export default Trailer;
