import { render, waitFor, renderHook, act } from "@testing-library/react";
import MoviesContextProvider from "./MoviesContextProvider";
import React from "react";
import { mockMovie } from "./Program/__mocks__/movie";
import { Movie } from "@src/models/movieCarouselState.model";

describe("MovieContextPovider", () => {
  beforeAll(() => {
    global.fetch = jest.fn();
  });
  afterEach(() => {
    jest.resetAllMocks();
  });
  afterAll(() => {
    delete global.fetch;
  });
  it("MoviesContextProvider should render", () => {
    const mockResponse = [mockMovie] as Movie[];
    const fetchSpy = jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockResponse) })
        ) as jest.Mock
      );
    const container = render(
      <MoviesContextProvider>
        <>test</>
      </MoviesContextProvider>
    );
    waitFor(() => {
      expect(container).toBeTruthy();
      expect(fetchSpy).toHaveBeenCalled();
    });
  });

  it("MoviesContextProvider should return selected valid movie id ", () => {
    const mockResponse = [mockMovie] as Movie[];
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockResponse) })
        ) as jest.Mock
      );
    const { result } = renderHook(() =>
      MoviesContextProvider({ children: <></> })
    );
    act(() => {
      result.current.props.value.setMovies([mockMovie]);
    });
    const movie = result.current.props.value.getMovie(mockMovie.id.toString());
    expect(movie).toEqual(mockMovie);
  });

  it("MoviesContextProvider should return empty object for a invalid movie id ", () => {
    const mockResponse = [mockMovie] as Movie[];
    jest
      .spyOn(global, "fetch")
      .mockImplementation(
        jest.fn(() =>
          Promise.resolve({ json: () => Promise.resolve(mockResponse) })
        ) as jest.Mock
      );
    const { result } = renderHook(() =>
      MoviesContextProvider({ children: <>test</> })
    );
    act(() => {
      result.current.props.value.setMovies([mockMovie]);
    });
    const movie = result.current.props.value.getMovie(`testtest1111`);
    expect(movie).toEqual({});
  });
});
