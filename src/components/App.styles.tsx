import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle<{ $bgColour: string }>`
  body, html {
    margin: 0;
    font-family: "Open Sans";
    background: ${(props) => props.$bgColour};
    height: 100vh;
    width: 100vw;
    margin: 0;
    padding: 1em;
    overflow-x: hidden;
  }
`;

export default GlobalStyle;
