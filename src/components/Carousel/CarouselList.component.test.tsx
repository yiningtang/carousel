import React from "react";
import { render } from "@testing-library/react";
import { fireEvent, screen, waitFor } from "@testing-library/dom";
import CarouselList from "./CarouselList.component";
import { mockMovie } from "../Program/__mocks__/movie";
import {BrowserRouter} from "react-router-dom";

describe("Carousel List Component", () => {
    beforeEach(() => {
        jest.clearAllMocks()
    })
    it("Should render Carousel list", async () => {
        render(
            <BrowserRouter>
                <CarouselList
                    movies={[mockMovie]}
                    start={0}
                    end={1}
                    isLast={true}
                    rotateMovieSlides={(_start: number, _end: number) => jest.fn()}
                />
            </BrowserRouter>
        );
        const carouselListItem = await screen.getAllByRole('link');
        expect(carouselListItem.length).toBe(1);
    });
    it("Should navigate when a particular carousel slide is on enter key press", async () => {
        render(
            <BrowserRouter>
                <CarouselList
                    movies={[mockMovie]}
                    start={0}
                    end={1}
                    isLast={true}
                    rotateMovieSlides={(_start: number, _end: number) => jest.fn()}
                />
            </BrowserRouter>
        );
        const carouselListItem = await screen.getByTestId(`slide-${mockMovie.id}-${0}`)
        fireEvent.keyDown(carouselListItem, {key: 'Enter', code: 'Enter', charCode: 13});
       await waitFor(() => {
           expect(window.location.pathname).toEqual(`/program/${mockMovie.id}`)
        })
    });

    it("Should call rotation function when the last carousel slide within current rotation but not the very last slide in carousel data source is on arrow right key press ", async () => {
        const mockCarouselComponnet = {
            rotateFn: () => jest.fn()
        }
        const spyOnRotateFn = jest.spyOn(mockCarouselComponnet, 'rotateFn');
        const mockMovies = new Array(6).fill(mockMovie);
        render(
            <BrowserRouter>
                <CarouselList
                    movies={mockMovies}
                    start={0}
                    end={1}
                    isLast={false}
                    rotateMovieSlides={mockCarouselComponnet.rotateFn}
                />
            </BrowserRouter>
        );
        
        const carouselListItem = await screen.getByTestId(`slide-${mockMovie.id}-${4}`)
        fireEvent.keyDown(carouselListItem, {key: 'ArrowRight', code: 'ArrowRight', charCode: 39});
       await waitFor(() => {
          expect(spyOnRotateFn).toHaveBeenCalled()
        })
    });

    it("Should not call rotation function  when the very last carousel slide in carousel data source is on arrow right key press ", async () => {
        const mockCarouselComponnet = {
            rotateFn: () => jest.fn()
        }
        const spyOnRotateFn = jest.spyOn(mockCarouselComponnet, 'rotateFn');
        const mockMovies = new Array(6).fill(mockMovie);
        render(
            <BrowserRouter>
                <CarouselList
                    movies={mockMovies}
                    start={0}
                    end={1}
                    isLast={true}
                    rotateMovieSlides={mockCarouselComponnet.rotateFn}
                />
            </BrowserRouter>
        );
        
        const carouselListItem = await screen.getByTestId(`slide-${mockMovie.id}-${4}`)
        fireEvent.keyDown(carouselListItem, {key: 'ArrowRight', code: 'ArrowRight', charCode: 39});
       await waitFor(() => {
          expect(spyOnRotateFn).not.toHaveBeenCalled()
        })
    });
});
