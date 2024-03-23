import React from "react";
import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import Navbar from "./NavBar.component";
import { NAV_MENU_OPTIONS } from "@src/models/constants";
import { BrowserRouter } from "react-router-dom";
let location: Location;

describe("Navbar component", () => {
  beforeEach(() => {
    location = window.location;
    jest.spyOn(window, "location", "get").mockRestore();
  });

  it("Should render navbar with expected nav menu", async () => {
    render(
      <BrowserRouter>
        <Navbar options={NAV_MENU_OPTIONS} />
      </BrowserRouter>
    );
    const homeText = screen.getByText("Home");
    expect(homeText).toBeInTheDocument();
  });

  it("Should render navbar with active class on home menu", async () => {
    const mockedLocation = {
      ...location,
      protocol: "https:",
      host: "www.example.com.au",
      pathname: "/",
    };
    jest.spyOn(window, "location", "get").mockReturnValue(mockedLocation);
    render(
      <BrowserRouter>
        <Navbar options={NAV_MENU_OPTIONS} />
      </BrowserRouter>
    );
    const homeText = screen.getByText("Home");
    expect(homeText).toHaveClass("active");
  });

  it("Should not render navbar with active class on home menu if the pathname is not default", async () => {
    const mockedLocation = {
      ...location,
      protocol: "https:",
      host: "www.example.com.au",
      pathname: "/test",
    };
    jest.spyOn(window, "location", "get").mockReturnValue(mockedLocation);
    render(
      <BrowserRouter>
        <Navbar options={NAV_MENU_OPTIONS} />
      </BrowserRouter>
    );
    const homeText = screen.getByText("Home");
    expect(homeText).not.toHaveClass('active')
  });
});
