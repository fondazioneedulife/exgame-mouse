import { createContext, useState, type PropsWithChildren } from "react";
type AuthenticationContextType = {
    username: string;
    setUsername: (username: string) => void;
}
export const AuthenticationContext = createContext<AuthenticationContextType>({} as AuthenticationContextType);

export const AuthenticatorProvider: React.FC<PropsWithChildren> = ({children}) => {
    const [username, setUsername] = useState<string>("");
    console.log(username);
    return (
        <AuthenticationContext.Provider value={{username, setUsername, authenticate, set}}>
            {children}
        </AuthenticationContext.Provider>
    );
}