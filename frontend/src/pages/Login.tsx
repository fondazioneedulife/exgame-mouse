import { useContext, useState } from "react";
import { useNavigate } from "react-router";
import { AuthenticationContext } from "../components/Auth/AuthenticationContext";
import styles from "./Login.module.css";

export const Login: React.FC = () => {

  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const { login } = useContext(AuthenticationContext);

  const handleLogin = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    login(user);
    navigate("/");
  }

  return <div className={styles.login}>
    <h2>Accedi</h2>
    <form>
      <label>Nome:
        <input type="text" onChange={(e) => setUser(e.target.value)} />
      </label>
      <button onClick={handleLogin}>Login</button>
    </form>
  </div>;
}