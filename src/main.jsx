/** Libraries */
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";

/** Providers */
import { UiProvider } from "./providers";

/** Store */
import { store } from "./store/store.js";

/** Router */
import { AppRouter } from "./router/AppRouter.jsx";

/** Styles */
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Provider store={store}>
      <UiProvider>
        <AppRouter />
      </UiProvider>
    </Provider>
  </React.StrictMode>
);
