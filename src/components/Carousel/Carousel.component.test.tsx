import { MoviesContext } from "../App";
/* eslint-disable react/display-name */
import React from "react"
import { render } from "@testing-library/react"
import {screen} from '@testing-library/dom'
import { MoviesContextType } from "@src/models/movieCarouselState.model";
import { LoadingStatus } from "@src/models/constants";
import Carousel from "./Carousel.component";
import { mockMovie } from "../Program/__mocks__/movie";

jest.mock('./CarouselLoading.component', () => () => (<>Loading</>) );
jest.mock('../Error', () => () => (<>Error</>));
jest.mock('./CarouselList.component', () => () => (<>Carousel list</>));

describe('Carousel component', () => {
    it('Should render Carousel component loading state ', async ()=> {
        const mockMoviesContext: MoviesContextType = {
            movies: [],
            setMovies: () => null,
            getMovie: () => (undefined),
            loading: LoadingStatus.Loading,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Carousel /></MoviesContext.Provider>)
        const laodingText = await screen.getByText(`Loading`)
        expect(laodingText).toBeInTheDocument()
    })
    it('Should render Carousel component error state ', async ()=> {
        const mockMoviesContext: MoviesContextType = {
            movies: [],
            setMovies: () => null,
            getMovie: () => (undefined),
            loading: LoadingStatus.Failed,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Carousel /></MoviesContext.Provider>)
        const errorText = await screen.getByText(/Error/i)
        expect(errorText).toBeInTheDocument()
    })
    it('Should render Carousel list state ', async ()=> {
        const mockMoviesContext: MoviesContextType = {
            movies: [mockMovie],
            setMovies: () => null,
            getMovie: () => (undefined),
            loading: LoadingStatus.Completed,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Carousel /></MoviesContext.Provider>)
        const carouselListText = await screen.getByText(/Carousel list/i)
        expect(carouselListText).toBeInTheDocument()
    })
}); 