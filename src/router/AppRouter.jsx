/** Libraries */
import { useEffect } from "react";
import { Routes, Route, BrowserRouter, Navigate } from "react-router-dom";

import Backdrop from "@mui/material/Backdrop";
import CircularProgress from "@mui/material/CircularProgress";

/** Middlewares */
import { PrivateRoute } from "./PrivateRoute";
import { PublicRoute } from "./PublicRoute";

/** Pages */
import { LoginPage, HomePage } from "../pages";

/** Custom hooks */
import { useAuthStore } from "../hooks";

export const AppRouter = () => {
  const { _id, checking, startChecking } = useAuthStore();

  useEffect(() => {
    startChecking();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  if (checking) {
    return (
      <Backdrop
        sx={{
          display: "flex",
          flexDirection: "column",
          color: "#fff",
          zIndex: (theme) => theme.zIndex.drawer + 1,
        }}
        open={true}
      >
        <CircularProgress
          color="inherit"
          size="80px"
          sx={{ display: "block" }}
        />
      </Backdrop>
    );
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute isAutenticated={!!_id}>
              <HomePage />
            </PrivateRoute>
          }
        />

        <Route
          path="login"
          element={
            <PublicRoute isAuthenticated={!!_id}>
              <LoginPage />
            </PublicRoute>
          }
        />

        <Route path="/*" element={<Navigate to="/" />} />
      </Routes>
    </BrowserRouter>
  );
};
