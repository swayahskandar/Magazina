import React from "react";
import { MovieCard } from "../MovieCard/MovieCard";
import "./movielist.css";

export const MoviesList = ({ moviesList, nameSearch, ratingSearch }) => {
  return (
    <div className="movies-list">
      {moviesList
        .filter(
          (movie) =>
            movie.rating >= ratingSearch &&
            movie.name.toLowerCase().includes(nameSearch.toLowerCase().trim())
        )
        .map((movie, i) => (
          <MovieCard movie={movie} key={i} />
        ))}
    </div>
  );
};
