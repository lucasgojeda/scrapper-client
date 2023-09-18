/** Libraries */
import { createSlice } from "@reduxjs/toolkit";

export const authSlice = createSlice({
  name: "auth",
  initialState: {
    checking: true,
    _id: "",
    username: "",
    email: "",
    status: false,
  },
  reducers: {
    authLogin: (state, action) => {
      state.checking = false;
      state._id = action.payload._id;
      state.username = action.payload.username;
      state.email = action.payload.email;
      state.status = action.payload.status;
    },
    authCheckingFinish: (state) => {
      state.checking = false;
    },
    authLogout: (state) => {
      state.checking = false;
      state._id = "";
      state.name = "";
      state.username = "";
      state.email = "";
      state.status = false;
    },
  },
});

export const { authLogin, authCheckingFinish, authLogout } = authSlice.actions;
