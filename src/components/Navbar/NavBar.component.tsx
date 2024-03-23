import React from "react";
import Styles from "./NavBar.styles";
import LogoImg from "./Logo/Logo.component";
import styled from "styled-components";
import { FONT_COLOUR, WHITE } from "@src/models/constants";
import { Link, useParams } from "react-router-dom";

function Navbar({
  options,
}: {
  options: { id: string; value: string; displayName: string; path: string }[];
}) {
  const activePath = window.location.pathname;
  return (
    <header>
      <nav>
        <LogoImg />
        <Styles.Menu>
          {options?.length > 0 &&
            options.map((option) => (
              <Styles.Option
                $fontColour={FONT_COLOUR}
                $activeFontColour={WHITE}
                key={option.id}
              >
                <Link
                  className={option.path === activePath ? "active" : ""}
                  to="/"
                >
                  {option.displayName}
                </Link>
              </Styles.Option>
            ))}
        </Styles.Menu>
      </nav>
    </header>
  );
}

const navBar = styled(Navbar)`
  margin: 2em;
`;
export default navBar;
