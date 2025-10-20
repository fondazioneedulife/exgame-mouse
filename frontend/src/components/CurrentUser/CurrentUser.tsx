import { useContext } from "react";
import { AuthenticationContext } from "../Auth/AuthenticationContext";

export const CurrentUser: React.FC = () => {
  const { userName } = useContext(AuthenticationContext);

  if (userName === "") {
    return <ul>
      <li>
        <a href="/login">Login</a>
      </li>
    </ul>;
  }

  return (<ul>
    <li>
      Ciao {userName}
    </li>
    <li>
      <a href="/logout">
        Logout
      </a>
    </li>
  </ul>
  );
}