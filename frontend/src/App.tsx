import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import TestMatematica from "./elements/quiz-matematica";
import Timer from "./elements/timer";

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <a href="">
            <img src={Logo} alt="" className={styles.logo} />
          </a>
          <ul>
            <li>
              <a href="#" className={styles.sx}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="#" className={styles.sx}>
                Esami
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <a href="#" className={styles.dx}>
                Albe Molon
              </a>
            </li>
            <li>
              <a href="#" className={styles.dx}>
                Logout
              </a>
            </li>
          </ul>
        </div>
      </nav>

      <main>

        <div className={styles.main}>
          <div className={styles.content}>
            <div className={styles.userInfo}>
              <img src={Icona} alt="" className={styles.icona} />
              <p>Mario Rossi</p>
            </div>
          </div>
        </div>

        <h1 className={styles.description}>
          Test di Matematica - Classe 1A
        </h1>

        <div className={styles.helpers}></div>
        <Timer></Timer>
        <TestMatematica></TestMatematica>
      </main>


    </>
  );
}

export default App;
