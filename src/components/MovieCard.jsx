import React from "react";

const MovieCard = ({
  movie: { title, vote_average, poster_path, release_date, original_language },
}) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden w-40">
      <img
        src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/no-movie.png"}
        alt={title}
        onError={(e) => { e.target.src = "/no-movie.png"; }}
        className="w-40 h-60 object-cover"
      />
      <div className="p-3">
        <h3 className="text-sm font-semibold text-gray-900 dark:text-white truncate">
          {title}
        </h3>
        <div className="flex items-center mt-2 space-x-1 text-gray-700 dark:text-gray-300 text-xs">
          <div className="flex items-center">
            <img src="star.svg" alt="Star Icon" className="w-4 h-4 mr-1" />
            <p>{vote_average ? vote_average.toFixed(1) : "N/A"}</p>
          </div>
          <span>•</span>
          <p className="uppercase">{original_language}</p>
          <span>•</span>
          <p>{release_date ? release_date.split("-")[0] : "N/A"}</p>
        </div>
      </div>
    </div>
  );
};

export default MovieCard;
