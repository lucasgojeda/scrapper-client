/** Libraries */
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PublicRoute = ({ children, isAuthenticated }) => {
  return !isAuthenticated ? children : <Navigate to="/" />;
};
