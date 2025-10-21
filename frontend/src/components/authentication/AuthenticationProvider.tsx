import { createContext, useState, type PropsWithChildren } from "react";

const AuthenticationContest = createContext({});

export const AuthenticationProvider: React.FC<PropsWithChildren> = {(children)} => {
    const [username, setUsername] = useState<string>("");
    return (
        <AuthenticationContest.Provider value={{username, setUsername}}>
            {children}
        </AuthenticationContest.Provider>
    );
}