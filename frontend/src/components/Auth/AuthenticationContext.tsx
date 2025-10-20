import { createContext } from "react";

export const AuthenticationContext = createContext<{
  isAuthenticated: boolean;
  userName: string;
  login: (name: string) => void;
  logout: () => void;
}>({
  isAuthenticated: false,
  userName: "",
  login: () => { },
  logout: () => { },
});
