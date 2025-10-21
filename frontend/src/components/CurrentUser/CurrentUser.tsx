import { useContext } from "react";
import { AuthenticationContext } from "../authentication/AuthenticationProvider";

export const CurrentUser = () => {
    const {username} = useContext(AuthenticationContext);
    return(
        username
    );
}