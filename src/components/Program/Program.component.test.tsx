/* eslint-disable react/display-name */
import React from "react"
import { render } from "@testing-library/react"
import {screen} from '@testing-library/dom'

import Program from "./Program.component"
import { MoviesContextType } from "@src/models/movieCarouselState.model"
import { LoadingStatus } from "@src/models/constants"
import { MoviesContext } from "../App";
import Router from "react-router-dom";
import { mockMovie } from "./__mocks__/movie"

// eslint-disable-next-line react/display-name
jest.mock('./PromgramLoading.component', () => () => {
    return (<div data-testid='loading'>Loading</div>)
});

jest.mock('react-router-dom', () => ({
    ...jest.requireActual("react-router-dom"),
    useParams: () => jest.fn()
}))

jest.mock('../Error', () => () => (<div data-testid="error">Error</div>))

describe('Program component', () => {
    afterEach(() => {
        jest.spyOn(window, "location", "get").mockRestore();
        jest.spyOn(Router, 'useParams').mockRestore();
    })
    
    it('Should render program loading state',  async () => {
        const mockedLocation = {
            ...location,
            protocol: "https:",
            host: "www.example.com.au",
            pathname: "/program/1234",
          };
        jest.spyOn(window, "location", "get").mockReturnValue(mockedLocation);
        const mockMoviesContext: MoviesContextType = {
            movies: [],
            setMovies: () => null,
            getMovie: () => ({}),
            loading: LoadingStatus.Loading,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Program /></MoviesContext.Provider>)
        const loadigComponent = await screen.getByTestId('loading');
        expect(loadigComponent).toBeInTheDocument();
    })

    it('Should render program details state',  async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({id: '1234'})
        const mockMoviesContext: MoviesContextType = {
            movies: [mockMovie],
            setMovies: () => null,
            getMovie: () => (mockMovie),
            loading: LoadingStatus.Completed,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Program /></MoviesContext.Provider>)
        const programComponent = await screen.getByTestId('program');
        expect(programComponent).toBeInTheDocument();
    })

    it('Should render program error state',  async () => {
        jest.spyOn(Router, 'useParams').mockReturnValue({id: ''})
        const mockMoviesContext: MoviesContextType = {
            movies: [],
            setMovies: () => null,
            getMovie: () => (undefined),
            loading: LoadingStatus.Failed,
        }
        render(<MoviesContext.Provider value={mockMoviesContext}><Program /></MoviesContext.Provider>)
        const errorComponent = await screen.getByTestId('error');
        expect(errorComponent).toBeInTheDocument();
    })
})