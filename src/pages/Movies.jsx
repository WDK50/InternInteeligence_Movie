/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from "react";
import { useDebounce } from "react-use";
import { getTrendingMovies, updateSearchCount } from "../components/appwrite";
import { Link } from "react-router-dom";
import { FaStar, FaStarHalfAlt, FaRegStar } from "react-icons/fa";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/500x750?text=No+Image";

const Movies = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [filter, setFilter] = useState("popular");
  const [movies, setMovies] = useState([]);
  const [error, setError] = useState(null);
  const [debouncedSearchTerm, setDebouncedSearchTerm] = useState("");

  useDebounce(() => setDebouncedSearchTerm(searchTerm), 500, [searchTerm]);

  const fetchMovies = async (query = "", category = "popular") => {
    try {
      setError(null);
      let url =
        query.trim() === ""
          ? `${API_BASE_URL}/movie/${category}?api_key=${API_KEY}`
          : `${API_BASE_URL}/search/movie?api_key=${API_KEY}&query=${encodeURIComponent(query)}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data.results || []);
      if (query && data.results && data.results.length > 0) {
        await updateSearchCount(query, data.results[0]);
      }
    } catch (err) {
      console.error("Error fetching movies:", err);
      setError("Failed to load movies. Please try again.");
    }
  };

  useEffect(() => {
    fetchMovies(debouncedSearchTerm, filter);
  }, [filter, debouncedSearchTerm]);

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    fetchMovies(searchTerm, filter);
  };

  const renderStars = (rating) => {
    const starRating = rating / 2;
    const fullStars = Math.floor(starRating);
    const hasHalfStar = starRating - fullStars >= 0.5;
    const emptyStars = 5 - fullStars - (hasHalfStar ? 1 : 0);
    const stars = [];
    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={`full-${i}`} className="text-yellow-400 inline-block" />);
    }
    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" className="text-yellow-400 inline-block" />);
    }
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<FaRegStar key={`empty-${i}`} className="text-yellow-400 inline-block" />);
    }
    return stars;
  };

  return (
    <div className="w-full bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-center justify-between mb-8 gap-2">
          <form onSubmit={handleSearchSubmit} className="flex w-full sm:w-2/3 gap-2">
            <input
              type="text"
              placeholder="Search for a movie..."
              className="w-1/2 px-4 py-2 border border-gray-300 rounded focus:outline-none "
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700">
              Search
            </button>
          </form>
          <select
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            className="md:w-1/6 sm:w-1/3 px-4 py-2 border border-gray-300 rounded bg-white dark:bg-gray-800 focus:outline-none focus:outline-0 "
          >
            <option value="popular">Popular</option>
            <option value="top_rated">Top Rated</option>
            <option value="upcoming">Upcoming</option>
          </select>
        </div>
        {error ? (
          <p className="text-center text-red-500">{error}</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {movies.length > 0 ? (
              movies.map((movie) => (
                <Link
                  key={movie.id}
                  to={`/movies/${movie.id}`}
                  className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden block"
                >
                  <img
                    src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : PLACEHOLDER_IMAGE}
                    alt={movie.title}
                    className="w-full h-80 object-cover"
                  />
                  <div className="p-4">
                    <h2 className="text-lg font-bold text-gray-900 dark:text-white">{movie.title}</h2>
                    <p className="text-gray-700 dark:text-gray-300 mt-2">
                      {movie.overview ? `${movie.overview.substring(0, 100)}...` : "No overview available."}
                    </p>
                    <div className="mt-2 flex items-center">
                      {renderStars(movie.vote_average)}
                      <span className="ml-2 text-sm text-gray-700 dark:text-gray-300">{movie.vote_average} / 10</span>
                    </div>
                  </div>
                </Link>
              ))
            ) : (
              <p className="text-center text-gray-500">No movies found.</p>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Movies;
