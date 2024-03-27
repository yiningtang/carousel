import { LoadingStatus } from "@src/models/constants";
import {
  Movie,
} from "@src/models/movieCarouselState.model";
import React, { useContext, useEffect, useState } from "react";
import { MoviesContext } from "../App";
import CarouselList from "./CarouselList.component";
import CarouselLoading from "./CarouselLoading.component";
import Error from "../Error";
import { CarouselContainer } from "./CarouselList.styles";

export default function Carousel() {
  const { movies, loading } = useContext(MoviesContext);
  const [activeMovies, setActiveMovies] = useState<{
    movies: Movie[];
    start: number;
    end: number;
  }>({ movies: [], start: 0, end: 5 });

  const movieCarouselLoading = loading === LoadingStatus.Loading;
  const movieCarouselError =
    loading === LoadingStatus.Failed ||
    !Array.isArray(activeMovies.movies || movies.length === 0);
  const movieCarouselReady =
    loading === LoadingStatus.Completed &&
    Array.isArray(activeMovies.movies) &&
    activeMovies.movies.length > 0 && !movieCarouselError;

  useEffect(() => {
    if (Array.isArray(movies) && movies.length > 0) {
      setActiveMovies({
        movies: movies.slice(0, 6),
        start: 0,
        end: 6,
      });
    }
  }, [movies, loading]);

  const movieSlideRotateHandler = (start: number, end: number) => {
    const moviesSlice = movies.slice(start, end);
    setActiveMovies({ movies: moviesSlice, start, end });
  };

  return (
    <CarouselContainer>
      {movieCarouselLoading && <CarouselLoading />}
      {movieCarouselReady && (
        <CarouselList
          movies={activeMovies.movies}
          start={activeMovies.start}
          end={activeMovies.end}
          isLast={!movies[activeMovies.end+1]}
          rotateMovieSlides={(start: number, end: number) =>
            movieSlideRotateHandler(start, end)
          }
        />
      )}

      {movieCarouselError && <Error />}
    </CarouselContainer>
  );
}
