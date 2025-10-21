import { useContext } from "react"
import { AuthenticationContext } from "../Authentication/AuthenticationProvider"

export const CurrentUser = () => {
    const {username} = useContext(AuthenticationContext)
    return (username)
}
