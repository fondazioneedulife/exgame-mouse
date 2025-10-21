import {
  createContext,
  useState,
  type PropsWithChildren,

} from "react";

type AuthenticationContextType = {
  username: string | null;
  setUsername: (value: string | null) => void;
};

// eslint-disable-next-line react-refresh/only-export-components
export const AuthenticationContext = createContext<AuthenticationContextType>({
  username: null,
  setUsername: () => {},
});

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({
  children,
}) => {
  const [username, setUsername] = useState<string | null>(null);

  return (
    <AuthenticationContext.Provider value={{ username, setUsername }}>
      {children}
    </AuthenticationContext.Provider>
  );
};
