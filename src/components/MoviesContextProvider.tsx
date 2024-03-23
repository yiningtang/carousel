import { LoadingStatus } from "@src/models/constants";
import { Movie } from "@src/models/movieCarouselState.model";
import React, { useEffect, useState } from "react";
import { MoviesContext } from "./App";
import Movies from "./Carousel/data.json";
const promiseGen = () =>
  new Promise((res, rej) => setTimeout(() => res(Movies), 1000));

async function getMovies(): Promise<Movie[]> {
  // eslint-disable-next-line no-useless-catch
  try {
    // const moviesJson = await fetch(`data.json`);
    // const movies = await moviesJson.json();
    const movies = (await promiseGen()) as Movie[];
    console.log(movies)
    return movies;
  } catch (error) {
    throw error;
  }
}

export default function ContextProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [movies, updateMovies] = useState<Movie[]>([]);
  const [loading, toggleLoading] = useState<LoadingStatus>(LoadingStatus.Idle);

  useEffect(() => {
    toggleLoading(LoadingStatus.Loading);
    getMovies()
      .then((movies) => {
        setMovies(movies);
        toggleLoading(LoadingStatus.Completed);
      })
      .catch((error) => {
        toggleLoading(LoadingStatus.Failed);
        console.log(error);
      });
  }, []);

  const setMovies = (movies: Movie[]) => {
    updateMovies(movies);
  };

  const getMovie = (id: string): Movie|Record<string, never> => {
    const movie = movies.find((movie) => movie.id.toString() === id);
    toggleLoading(movie ? LoadingStatus.Completed : LoadingStatus.Failed);
    return movie ?? {}
  };

  return (
    <MoviesContext.Provider value={{ movies, setMovies, getMovie, loading }}>
      {children}
    </MoviesContext.Provider>
  );
}
