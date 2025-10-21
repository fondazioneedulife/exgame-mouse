import { useState } from "react";

import styles from "./Login.module.css";

export function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");




  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <h1 className={styles.loginTitle}>Benvenuto</h1>

        <div className={styles.inputGroup}>
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className={styles.inputGroup}>
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
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
