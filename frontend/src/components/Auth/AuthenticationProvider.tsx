import { useState } from "react";
import { AuthenticationContext } from "./AuthenticationContext";

export const AuthenticationProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userName, setUserName] = useState("");

  const login = (name: string) => {
    setUserName(name);
    setIsAuthenticated(true);
  };

  const logout = () => {
    setUserName("");
    setIsAuthenticated(false);
  };

  return (
    <AuthenticationContext.Provider
      value={{ isAuthenticated, userName, login, logout }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}