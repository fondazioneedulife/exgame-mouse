import { useContext, useEffect } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../components/Auth/AuthenticationContext";

export const Logout: React.FC = () => {
  const navigate = useNavigate();
  const { logout } = useContext(AuthenticationContext);

  useEffect(() => {
    logout();
    navigate("/login");
  }, [logout, navigate]);

  return <div>Arrivederci!</div>;
}