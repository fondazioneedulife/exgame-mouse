import { createContext, useState, type PropsWithChildren } from "react"
type AuthenticationContextType = {
    username: string;
    setUsername: (username: string) => void
    authenticated: boolean;
    setAuthenticated: (authenticated: boolean) => void
}
export const AuthenticationContext = createContext<AuthenticationContextType>( {} as AuthenticationContextType)

export const AuthenticationProvider: React.FC<PropsWithChildren> = ({children}) => {
    const[username, setUsername] = useState<string>("")
    const[authenticated, setAuthenticated] = useState<boolean>(false)
    console.log(username)
    return(
        <AuthenticationContext.Provider value={{username, setUsername, authenticated, setAuthenticated}}>
            {children}
        </AuthenticationContext.Provider>
    )
}