import { useNavigate } from "react-router";
import { AuthenticationContext } from "../Authentication/AuthenticationProvider";
import styles from "./Login.module.css";
import { useContext } from "react";

const Login = () => {
  const ctx = useContext(AuthenticationContext);
  const navigate = useNavigate();

  return (
    <>
      <div className={styles.container}>
        <form action="" className={styles.form}>
          <label htmlFor="">Nome:</label>
          <input
            type="text"
            className={styles.textArea}
            placeholder="Inserisci nome..."
            onChange={(e) => {
              const nome = e?.target?.value;
              ctx.setUsername(nome);
            }}
          />
          <button
            type="submit"
            className={styles.button}
            onClick={(e) => {
              e.preventDefault();
              ctx.setAuthenticated(true);
              navigate("/");
            }}
          >
            Invia Form
          </button>
        </form>
      </div>
    </>
  );
};

export default Login;
