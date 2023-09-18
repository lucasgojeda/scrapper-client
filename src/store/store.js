/** Libraries */
import { configureStore } from "@reduxjs/toolkit";

/** Redux toolkit - Slices */
import { authSlice, reportSlice, uiSlice } from "./slices";

/** Utils */
import { getEnvironmets } from "../utils";
const { ENV_MODE } = getEnvironmets();

export const store = configureStore({
  reducer: {
    auth: authSlice.reducer,
    ui: uiSlice.reducer,
    report: reportSlice.reducer,
  },
  devTools: ENV_MODE !== "PROD",
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }),
});
