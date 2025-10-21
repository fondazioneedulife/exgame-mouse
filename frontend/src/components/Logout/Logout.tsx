import { useContext } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../Authentication/AuthenticationProvider";

export const Logout: React.FC = () => {
  const { setUsername, setAuthenticated } = useContext(AuthenticationContext);
  const navigate = useNavigate();
  const handleLogout = () => {
    setUsername("");
    setAuthenticated(false);
    navigate("/login");
  };

  return <a onClick={handleLogout}>Logout</a>;
};
