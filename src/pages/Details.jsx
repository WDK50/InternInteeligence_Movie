/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";

const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const BASE_URL = "https://api.themoviedb.org/3";
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/500x750?text=No+Image";

const Details = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [error, setError] = useState(null);

  const fetchMovieDetails = async () => {
    try {
      setError(null);
      const res = await axios.get(`${BASE_URL}/movie/${id}?api_key=${API_KEY}`);
      setMovie(res.data);
    } catch (err) {
      console.error("Error fetching movie details:", err);
      setError("Failed to load movie details. Please try again.");
    }
  };

  useEffect(() => {
    fetchMovieDetails();
  }, [id]);

  if (error) {
    return <p className="text-center text-red-500">{error}</p>;
  }
  if (!movie) {
    return <p className="text-center text-gray-500">Loading...</p>;
  }
  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row gap-8">
          <div className="md:w-1/3">
            <img
              src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : PLACEHOLDER_IMAGE}
              alt={movie.title}
              className="w-full rounded-lg shadow-lg"
            />
          </div>
          <div className="md:w-2/3 space-y-4">
            <h1 className="text-4xl font-bold">{movie.title}</h1>
            {movie.tagline && <h2 className="text-xl italic text-gray-600 dark:text-gray-400">{movie.tagline}</h2>}
            <p className="text-gray-700 dark:text-gray-300">{movie.overview}</p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Release Date:</span> {movie.release_date}
            </p>
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Rating:</span> {movie.vote_average} / 10
            </p>
            {movie.genres && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Genres:</span> {movie.genres.map((genre) => genre.name).join(", ")}
              </p>
            )}
            {movie.runtime && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Runtime:</span> {movie.runtime} minutes
              </p>
            )}
            {movie.budget > 0 && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Budget:</span> ${movie.budget.toLocaleString()}
              </p>
            )}
            {movie.revenue > 0 && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Revenue:</span> ${movie.revenue.toLocaleString()}
              </p>
            )}
            {movie.production_companies && movie.production_companies.length > 0 && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Production Companies:</span> {movie.production_companies.map((company) => company.name).join(", ")}
              </p>
            )}
            {movie.homepage && (
              <p className="text-gray-700 dark:text-gray-300">
                <span className="font-semibold">Homepage:</span> <a href={movie.homepage} target="_blank" rel="noopener noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">{movie.homepage}</a>
              </p>
            )}
            <p className="text-gray-700 dark:text-gray-300">
              <span className="font-semibold">Original Language:</span> {movie.original_language.toUpperCase()}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
