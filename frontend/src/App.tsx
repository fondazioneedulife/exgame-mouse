import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import { Question } from "./Question"

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
                Cane Molon
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

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alberto Molon</p>
          </div>
        </div>

      <p className={styles.title}>Test di Matematica - 1A</p>
      <div className={styles.menu}>
        <p className={styles.container}>date: 12 Settembre 2025</p>
        <p className={styles.container}>session: prima sessione</p>
        <p className={styles.container}>teacher: prof bianchi</p>
      </div>

      <div className={styles.timeContainer}>
        <p className={styles.timeTitle}>Tempo Rimasto</p>
        <p className={styles.timeCounter}>counter</p>
      </div>

    <Question
      title="Quanto fa 2+2?"
      answer={["2", "3", "4", "dipende"]}>
    </Question>

    <Question
      title="Quanto fa 3x3?"
      answer={["3", "6", "9", "dipende dalla fantasia"]}>
    </Question>

    <Question
      title="Quante caramelle rimangono se ne hai 10 e ne mangio 2"
      answer={["2", "4", "8", "10 (le hai solo guardate)"]}>
    </Question>

    <Question
      title="Quante zampe hanno le giraffe in mezzo?"
      answer={["6", "8", "10", "dipende dalla fantasia"]}>
    </Question>

      </div>
    </>
  );
}

export default App;
