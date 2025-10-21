import styles from "./Login.module.css";
export const Login = () => {
  return (
    <div className={styles.loginContainer}>
      <form className={styles.loginForm}>
        <label htmlFor="name">Nome:</label>
        <input type="text" id="name" name="name" />
        <button className={styles.loginBtn}>Login</button>
      </form>
    </div>
  );
};
