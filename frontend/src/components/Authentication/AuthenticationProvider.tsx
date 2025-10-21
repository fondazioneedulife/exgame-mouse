import { createContext, useState, type PropsWithChildren } from "react";

type AuthenticationContextType = {
  username: string;
  setUsername: (username: string) => void;
  authenticated: boolean;
  setAuthenticated: (authenticated: boolean) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthenticationContext = createContext<AuthenticationContextType>(
  {} as AuthenticationContextType,
);

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [username, _setUsername] = useState<string>(
    localStorage.getItem("username") || "",
  );
  const [authenticated, _setAuthenticated] = useState<boolean>(
    localStorage.getItem("authenticated") === "true",
  );

  const setUsername = (username: string) => {
    _setUsername(username);
    localStorage.setItem("username", username);
  };

  const setAuthenticated = (authenticated: boolean) => {
    _setAuthenticated(authenticated);
    localStorage.setItem("authenticated", authenticated ? "true" : "false");
  };

  return (
    <AuthenticationContext.Provider
      value={{ username, setUsername, authenticated, setAuthenticated }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
};
