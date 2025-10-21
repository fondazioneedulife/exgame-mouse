import React, {useContext} from "react";
import { AuthenticationContext } from "../components/authentication/AuthenticationProvider";


cosnt Logout = () => {
    const {setUsername, setAuthenticated} = useContext(AuthenticationContext);
    const navigate = useNavigate();
    const handleSubmit = () => {
        setUsername("");
        setAuthenticated(false);
    }
    return (
        <a onClick={  }>Logout</a>
    )
}

export default Logout;