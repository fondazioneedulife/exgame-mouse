import styles from "./Login.module.css";

function Login() {
  return (
    <>
    <form>
        <div className={styles.container}>
            <h3>Accedi</h3> <br />
            <label htmlFor="name"><b>Username</b></label>
            <input type="text" placeholder="Enter Username" name="name" required></input> <br />
            <button type="submit">Login</button>
        </div>
    </form>
      
    </>
  );
}

export default Login;
