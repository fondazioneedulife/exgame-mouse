import { useContext } from "react";
import { AuthenticationContext } from "../../components/AuthenticationProvider/AuthenticationProvider";

export function CurrentUser() {
  const { username } = useContext(AuthenticationContext);

  return <>{username}</>;
}
