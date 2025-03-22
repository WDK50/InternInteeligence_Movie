import React, { useState, useEffect, useRef } from "react";
import { getTrendingMovies } from "../components/appwrite";
import Spinner from "../components/Spinner";

const API_BASE_URL = "https://api.themoviedb.org/3";
const API_KEY = import.meta.env.VITE_TMDB_API_KEY;
const IMAGE_BASE_URL = "https://image.tmdb.org/t/p/w500";
const PLACEHOLDER_IMAGE = "https://via.placeholder.com/500x750?text=No+Image";

const Home = () => {
  const [carouselImages] = useState(["./Img1.jpg", "./Img2.jpg", "./Img3.jpg"]);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [movies, setMovies] = useState([]);
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [genres, setGenres] = useState({});
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const slideIntervalRef = useRef(null);

  useEffect(() => {
    slideIntervalRef.current = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(slideIntervalRef.current);
  }, [carouselImages.length]);

  const loadTrendingMovies = async () => {
    try {
      const data = await getTrendingMovies();
      setTrendingMovies(data);
    } catch (err) {
      console.error("Failed to load trending movies:", err);
    }
  };

  const fetchGenres = async () => {
    try {
      const url = `${API_BASE_URL}/genre/movie/list?api_key=${API_KEY}`;
      const res = await fetch(url);
      if (!res.ok) throw new Error("Failed to fetch genres");
      const data = await res.json();
      const genreMap = {};
      data.genres.forEach((g) => {
        genreMap[g.id] = g.name;
      });
      setGenres(genreMap);
    } catch (error) {
      console.error("Failed to fetch genres:", error);
    }
  };

  const fetchMovies = async () => {
    setLoading(true);
    setErrorMessage("");
    try {
      const endpoint = `${API_BASE_URL}/discover/movie?sort_by=popularity.desc&api_key=${API_KEY}`;
      const res = await fetch(endpoint);
      if (!res.ok) throw new Error("Failed to fetch movies");
      const data = await res.json();
      setMovies(data.results || []);
    } catch (error) {
      setErrorMessage("Error fetching movies. Please try again later.");
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    loadTrendingMovies();
    fetchGenres();
    fetchMovies();
  }, []);

  return (
    <main className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-white min-h-screen">
      <div className="relative w-full md:px-8 h-64 md:h-96 overflow-hidden">
        {carouselImages.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-500 ${
              index === currentSlide ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img src={img} alt={`Slide ${index}`} className="w-full h-full object-cover" />
          </div>
        ))}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center space-x-2">
          {carouselImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-colors duration-300 ${
                index === currentSlide ? "bg-white" : "bg-gray-400"
              }`}
            ></button>
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-6">
        {trendingMovies?.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Trending Movies</h2>
            <div className="flex overflow-x-auto space-x-8 scrollbar-hide">
              {trendingMovies.map((movie, index) => (
                <div key={movie.$id} className="relative flex-shrink-0 w-36 text-center">
                  <span
                    className="
                      absolute
                      inset-0
                      flex
                     items-center
                      justify-center
                      text-[5rem]
                      font-extrabold
                      text-white
                      pointer-events-none
                      z-0
                    "
                    style={{ opacity: 0.15 }} 
                  >
                    {index + 1}
                  </span>
                  <img
                    src={movie.poster_url}
                    alt={movie.title}
                    className="relative z-10 w-36 h-auto rounded-lg shadow-md opacity-90"
                  />
                  <p className="mt-2 text-sm font-semibold truncate">{movie.title}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {Object.keys(genres).length > 0 && movies.length > 0 && (
          <section className="mb-8">
            <h2 className="text-2xl font-bold mb-4">Movies by Genre</h2>
            {Object.keys(genres).map((genreId) => {
              const genreName = genres[genreId];
              const moviesByGenre = movies.filter((movie) =>
                movie.genre_ids.includes(parseInt(genreId))
              );
              if (moviesByGenre.length === 0) return null;
              return (
                <div key={genreId} className="mb-6">
                  <h3 className="text-xl font-semibold mb-2">{genreName}</h3>
                  <div className="flex gap-4 overflow-x-auto scrollbar-hide">
                    {moviesByGenre.map((movie) => (
                      <div
                        key={movie.id}
                        className="flex-shrink-0 w-36"
                      >
                        <div className="bg-white dark:bg-gray-800 rounded-lg shadow-md overflow-hidden">
                          <img
                            src={movie.poster_path ? `${IMAGE_BASE_URL}${movie.poster_path}` : PLACEHOLDER_IMAGE}
                            alt={movie.title}
                            className="w-36 h-48 object-cover"
                          />
                          <div className="p-2">
                            <h3 className="text-sm font-bold text-gray-900 dark:text-white truncate">
                              {movie.title}
                            </h3>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </section>
        )}

        {loading && <Spinner />}
        {errorMessage && <p className="text-red-500">{errorMessage}</p>}
      </div>
    </main>
  );
};

export default Home;
