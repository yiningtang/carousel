import React from "react";
import { createRoot } from "react-dom/client";
import App from "./components/App";


const app = (
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

createRoot(document.getElementById("app")).render(app);
