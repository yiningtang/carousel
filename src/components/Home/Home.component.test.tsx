/* eslint-disable react/display-name */
import React from "react"
import { render } from "@testing-library/react"
import {screen} from '@testing-library/dom'
import Home from "./Home.component"


jest.mock("../Carousel/Carousel.component", () => () => {
    return <div data-testid="carousel"/>;
  });

describe('Home component', () => {
    it('Should render Home component with carousel component', () => {
        render(<Home />)
        const carouselComponent = screen.getByTestId(`carousel`);
        expect(carouselComponent).toBeInTheDocument();
    })
})