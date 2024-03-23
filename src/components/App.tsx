import {
  BG_COLOUR,
  LoadingStatus,
  NAV_MENU_OPTIONS,
} from "@src/models/constants";
import React, { createContext } from "react";
import GlobalStyle from "./App.styles";
import Navbar from "./Navbar/NavBar.component";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Program from "./Program/Program.component";
import Home from "./Home/Home.component";
import { Movie } from "@src/models/movieCarouselState.model";
import ContextProvider from "./MoviesContextProvider";
import Error from "./Error";

export const MoviesContext = createContext<{
  movies: Movie[];
  setMovies: (movies: Movie[]) => void;
  getMovie: (id: string) => Movie | Record<string, never>;
  loading: LoadingStatus;
}>({
  movies: [],
  setMovies: () => null,
  getMovie: () => ({}),
  loading: LoadingStatus.Idle,
});

export default function App() {
  return (
    <ContextProvider>
      <Router>
        <GlobalStyle $bgColour={BG_COLOUR} />
        <Navbar options={NAV_MENU_OPTIONS} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="program/:id" element={<Program />}></Route>
          <Route path="*" element={<Error />}></Route>
        </Routes>
      </Router>
    </ContextProvider>
  );
}
