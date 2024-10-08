import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { PokeProvider } from "./context/context.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <PokeProvider>
    <App />
  </PokeProvider>
);
