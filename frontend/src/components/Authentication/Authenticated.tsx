import { useContext } from "react";
import { Link, Outlet } from "react-router";
import { AuthenticationContext } from "./AuthenticationProvider";

export const Authenticated = () => {
  const { authenticated } = useContext(AuthenticationContext);
  if (!authenticated) {
    return (
      <div>
        <h1>Non sei autenticato!</h1> <br/>
        <Link to="/login">Login</Link>
      </div>
    );
  }
  return <Outlet />;
};
