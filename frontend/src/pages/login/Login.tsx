import { useContext } from "react";
import styles from "./Login.module.css";
import { AuthenticationContext } from "../../components/AuthenticationProvider/AuthenticationProvider";

export function Login() {
  const ctx = useContext(AuthenticationContext);

  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Benvenuto</h1>

        <div className={styles.inputGroup}>
          <input
            type="text"
            placeholder="Nome"
            onChange={(e) => {
              const nome = e.target.value;
              ctx.setUsername(nome);
            }}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input type="password" placeholder="Password" required />
        </div>

        <button type="submit" className={styles.loginBtn}>
          Accedi
        </button>

        <p className={styles.signupLink}>
          Non hai un account? <a href="/register">Registrati</a>
        </p>
      </form>
    </div>
  );
}
