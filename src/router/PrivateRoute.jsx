/** Libraries */
import { Navigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export const PrivateRoute = ({ children, isAutenticated }) => {
  return isAutenticated ? children : <Navigate to="/login" />;
};
