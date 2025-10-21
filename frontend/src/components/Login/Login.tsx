import { useContext } from "react";
import { AuthenticationContext } from "../Authentication/AuthenticationProvider";
import styles from "./Login.module.css";
import { useNavigate } from "react-router";

export const Login = () => {
  const ctx = useContext(AuthenticationContext);
  const navigate = useNavigate();
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          id="name"
          name="name"
          onChange={(e) => {
            const nome = e.target.value;
            ctx.setUsername(nome);
          }}
        />
        <button
          className={styles.loginBtn}
          type="submit"
          onClick={(e) => {
            e.preventDefault()
            ctx.setAuthenticated(true);
            navigate("/");
          }}
        >
          Login
        </button>
      </form>
    </div>
  );
};
