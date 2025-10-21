import { useContext } from "react";
import { Outlet } from "react-router";
import { AuthenticationContext } from "./AuthenticationProvider";
import { Link } from "react-router";

export const Authenticated = () => {
  const { authenticated } = useContext(AuthenticationContext);

  if (!authenticated) {
    return <div>Pollo <Link to="/login">Login</Link></div>;
  }

  return <Outlet />;
};
