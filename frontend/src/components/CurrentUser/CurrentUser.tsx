import { useContext } from "react"
import { AuthenticationContext } from "../AuthenticationProvider/AuthenticationProvider"

export const CurrentUser = () => {
    const {username} = useContext(AuthenticationContext)
    return(
        username
    )
}