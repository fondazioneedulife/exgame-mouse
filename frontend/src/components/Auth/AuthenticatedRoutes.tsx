import { useContext } from "react";
import { Navigate, Outlet } from "react-router";
import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticatedRoutes: React.FC = () => {
  const { isAuthenticated } = useContext(AuthenticationContext);

  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
}