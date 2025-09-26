import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import Question from "./components/Question";

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
                Nome Cognome
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
            <p>Nome Cognome</p>
          </div>
          <div className={styles.examTitle}>
            <h1>Test di Matematica - Classe 1A</h1>
            <ul className={styles.examLabels}>
              <li className={styles.examLabelsItem}>Data: 26/05/2025</li>
              <li className={styles.examLabelsItem}>Sessione: Prima sessione</li>
              <li className={styles.examLabelsItem}>Docente: Prof. Mario Bianchi</li>
            </ul>
          </div>
          <div className={styles.timeBox}>
            Tempo rimanente:<br />
            00:25:00
          </div>
          <Question
            text="Quanto fa 2+2?"
            name="q1"
            options={["3", "6", "4", "Dipende dalla fantasia"]}
          />
          <hr />
          <Question
            text="Quanto fa 3x3?"
            name="q2"
            options={["6", "9", "12", "Dipende dalla fantasia"]}
          />
          <hr />
          <Question
            text="Quante caramelle rimangono se na hai 10 e ne mangi 2?"
            name="q3"
            options={["4", "8", "12", "10 (le hai solo guardate)"]}
          />
          <hr />
          <Question
            text="Quante zampe hanno due giraffe e mezzo?"
            name="q4"
            options={["6", "2", "9", "Dipende dalla giraffa"]}
          />
        </div>
      </div>

      {/* <Description type="info"> Oggi facciamo:
        <ul>
          <li>Esercizio 1</li>
          <li>Esercizio 2</li>
          <li>Esercizio 3</li>
        </ul> 
      </Description>

      <Description type="warning"> 
        Attenzione sarà difficile!
      </Description> */}
    </>
  );
}

export default App;
