import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Program from "./components/Program/Program.component";

// Say something
console.log("[ERWT] : Renderer execution started");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "program",
    element: <Program />,
  },
]);

// Application to Render
const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// Render application in DOM
createRoot(document.getElementById("app")).render(app);
