import { Movie } from "@src/models/movieCarouselState.model";
import { FONT_COLOUR, ITEM_ON_FOCUS } from "@src/models/constants";
import React, { useEffect, useRef, useState } from "react";
import { ImgGroup, ImgWrapper, Img, ImgItem } from "./CarouselList.styles";
import { useNavigate } from "react-router-dom";

export const renderDisplayMoviesSlies = (movies: Movie[]) => {
  if (movies.length === 6) return movies;
  const fillLength = 6 - movies.length;
  return movies.concat(new Array(fillLength).fill({}));
};

export default function CarouselList({
  movies,
  start,
  end,
  isLast,
  rotateMovieSlides,
}: {
  movies: Movie[];
  start: number;
  end: number;
  isLast: boolean;
  rotateMovieSlides: (arg1: number, arg2: number) => void;
}) {
  const navigate = useNavigate();
  const [displayMoviesSlides, setDisplaySlides] = useState<Movie[]>([]);
  const lastSlide = useRef<HTMLInputElement>(null);
  const firstSlide = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (Array.isArray(movies) && movies.length > 0) {
      const movieSlides = renderDisplayMoviesSlies(movies);
      setDisplaySlides(movieSlides);
    }
  }, [movies]);
  const handleKeyEvent = (
    event: React.KeyboardEvent<HTMLLIElement>,
    index: number,
    id: number,
    start?: number,
    end?: number
  ) => {
    if (event.code === "Enter") {
      navigate(`/program/${id}`);
    }
    if (event.code === "ArrowRight" && index == 4) {
      if(!isLast) {
        rotateMovieSlides(start + 5, end + 5);
        setTimeout(() => {
          firstSlide?.current?.focus();
        }, 200);
      }else {
       setTimeout(() => {
          firstSlide?.current?.blur();
       }, 0);
      } 
    }
    if (event.code === "ArrowLeft" && index == 0) {
      const newStart = start - 5 < 0 ? 0 : start - 5;
      const newEnd = end - 5 < 6 ? 6 : end - 5;
      if(start > 0) {
        rotateMovieSlides(newStart, newEnd);
        setTimeout(() => {
          lastSlide?.current?.focus();
        }, 200)
      }else {
        setTimeout(() => {
          lastSlide.current.blur();
        }, 0)
      }
    }
  };

  return (
    <ImgWrapper role="radiogroup">
      {displayMoviesSlides.map((movie, index) => (
        <ImgItem
          key={`${movie.id}-${index}`}
          onKeyDown={(event: React.KeyboardEvent<HTMLLIElement>) =>
            handleKeyEvent(event, index, movie.id, start, end)
          }
          data-testid={`slide-${movie.id}-${index}`}
        > {movie?.id ? (
          <>
          <ImgGroup
            name="image"
            type="radio"
            role="link"
            data-id={movie.id}
            $movieFocus={ITEM_ON_FOCUS}
            alt={movie.description}
            aria-label={movie.title}
            ref={index=== 5? lastSlide: index === 0? firstSlide: null}
          />
          <Img className="carousel-slide" $url={movie.image} aria-label={movie.description} role="img" $loadingColor={FONT_COLOUR} />
          <div role="img" className="image-placeholder"></div>
          </>): <div></div>}
        </ImgItem>
      ))}
    </ImgWrapper>
  );
}
