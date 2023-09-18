/** Libraries */
import { createSlice } from "@reduxjs/toolkit";

export const uiSlice = createSlice({
  name: "ui",
  initialState: {
    progressBackdrop: false,
  },
  reducers: {
    uiOpenProgressBackdrop: (state) => {
      state.progressBackdrop = true;
    },
    uiCloseProgressBackdrop: (state) => {
      state.progressBackdrop = false;
    },
    uiLogout: (state) => {
      state.progressBackdrop = false;
    },
  },
});

export const { uiOpenProgressBackdrop, uiCloseProgressBackdrop, uiLogout } =
  uiSlice.actions;
