/** Libraries */
import React from "react";
import ReactDOM from "react-dom/client";

/** Router */
import { AppRouter } from "./router/AppRouter.jsx";

/** Styles */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
);
