import { FONT_COLOUR, LoadingStatus, WHITE } from "@src/models/constants";
import { Movie, MoviesContextType } from "@src/models/movieCarouselState.model";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { MoviesContext } from "../App";
import {
  ProgramDesc,
  ProgramSection,
  ProgramWrapper,
  Image,
  PlaceHolder,
} from "./Program.styles";
import ProgramLoading from "./PromgramLoading.component";
import Error from "../Error";

export default function Program() {
  const { id } = useParams();
  const { movies, getMovie, loading } = useContext<MoviesContextType>(MoviesContext);
  const [movie, setMovie] = useState<Movie>();
  const [imgSkeleton, toggleImgSkeletonVisibility] = useState<boolean>(true);
  useEffect(() => {
    if (id && movies?.length > 0) {
      const movie = getMovie(id) as Movie;
      setMovie(movie);
    }
  }, [id, movies]);
  return (
    <>
      {loading === LoadingStatus.Loading && movies?.length === 0 && (
        <ProgramLoading />
      )}
      {movie && loading === LoadingStatus.Completed && (
        <ProgramWrapper data-testid='program' $fontColour={WHITE}>
          {imgSkeleton && (
            <PlaceHolder
              className="image-placeholder"
              $bgColour={FONT_COLOUR}
              $width={`20vw`}
              $height={`30vh`}
            />
          )}
          <Image
            src={movie.image}
            onLoad={() => toggleImgSkeletonVisibility(false)}
          />
          <ProgramSection>
            <h1>{movie.title}</h1>
            <p>{movie.rating}</p>
            <div className="divider"></div>
            <p>{movie.year}</p>
            <div className="divider"></div>
            <p>{movie.type}</p>
            <div className="divider"></div>
            <p>{movie.genre}</p>
            <div className="divider"></div>
            <p>{movie.language}</p>
            <ProgramDesc>{movie.description}</ProgramDesc>
          </ProgramSection>
        </ProgramWrapper>
      )}
      {!movie && loading === LoadingStatus.Failed && <Error />}
    </>
  );
}
