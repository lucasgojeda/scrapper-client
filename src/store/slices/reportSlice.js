/** Libraries */
import { createSlice } from "@reduxjs/toolkit";

export const reportSlice = createSlice({
  name: "report",
  initialState: {
    reports: [],
  },
  reducers: {
    loadReports: (state, action) => {
      state.reports = [...action.payload];
    },
    newReport: (state, action) => {
      state.reports = [action.payload, ...state.reports];
    },
    reportsLogout: (state) => {
      state.reports = [];
    },
  },
});

export const { loadReports, newReport, reportsLogout } = reportSlice.actions;
