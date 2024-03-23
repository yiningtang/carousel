import { Movie } from "@src/models/movieCarouselState.model";
import { FONT_COLOUR, ITEM_ON_FOCUS } from "@src/models/constants";
import React, { useEffect, useRef, useState } from "react";
import { ImgGroup, ImgWrapper, Img, ImgItem } from "./CarouselList.styles";
import { useNavigate } from "react-router-dom";
import CarouselLoading from "./CarouselLoading.component";

export const renderDisplayMoviesSlies = (movies: Movie[]) => {
  if (movies.length === 6) return movies;
  const fillLength = 6 - movies.length;
  return movies.concat(new Array(fillLength).fill({}));
};

export default function CarouselList({
  movies,
  start,
  end,
  rotateMovieSlides,
}: {
  movies: Movie[];
  start: number;
  end: number;
  rotateMovieSlides: (arg1: number, arg2: number) => void;
}) {
  const navigate = useNavigate();
  const [displayMoviesSlides, setDisplaySlides] = useState<Movie[]>([]);
  const lastSlide = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (Array.isArray(movies) && movies.length > 0) {
      const movieSlides = renderDisplayMoviesSlies(movies);
      setDisplaySlides(movieSlides);
    }
  }, [movies]);
  const handleKeyEvent = (
    event: React.KeyboardEvent<HTMLLIElement>,
    index: number,
    id?: number,
    start?: number
  ) => {
    if (event.code === "Enter") {
      navigate(`/program/${id}`);
    }
    if (event.code === "ArrowRight" && index == 4) {
      console.log(
        event,
        "last slide start loading",
        `start is ${start + 5} end is ${end + 5}`
      );
      rotateMovieSlides(start + 5, end + 5);
    }
    if (event.code === "ArrowLeft" && index == 0) {
      const newStart = start - 5 < 0 ? 0 : start - 5;
      const newEnd = end - 5 < 6 ? 6 : end - 5;
      console.log(event, "first slide start loading", newStart, newEnd);
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
          key={movie.id}
          onKeyDown={(event: React.KeyboardEvent<HTMLLIElement>) =>
            handleKeyEvent(event, index, movie.id, start)
          }
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
            ref={index===5? lastSlide: null}
          />
          <Img className="carousel-slide" $url={movie.image} aria-label={movie.description} role="img" $loadingColor={FONT_COLOUR} />
          </>): <div></div>}
        </ImgItem>
      ))}
    </ImgWrapper>
  );
}
