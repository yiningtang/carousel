import { LoadingStatus } from "./constants";

export interface Movie {
    id: number,
    title: string,
    description: string,
    type: string,
    image: string,
    rating: string,
    genre: string,
    year: number,
    language: string,
    loading?: boolean
}


export type MovieCarouselState = {
    movies: Movie[],
    loading: LoadingStatus,
    error: boolean
}

export const initialMovieCarouselState: MovieCarouselState = {
    movies: [],
    loading: LoadingStatus.Idle,
    error: false
}

export enum MovieAttribues {

}
