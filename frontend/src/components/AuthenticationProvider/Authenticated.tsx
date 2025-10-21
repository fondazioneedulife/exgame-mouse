import { useContext } from "react"
import { Outlet } from "react-router"
import { AuthenticationContext } from "./AuthenticationProvider"
import { Link } from "react-router"

export const Authenticated = () => {
    const {authenticated} = useContext(AuthenticationContext)
    if(!authenticated) {
        return <div>
            Devi essere loggato
            <Link to="/login">Login</Link>
            </div>
    }
    return(<Outlet />)
}