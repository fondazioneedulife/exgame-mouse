import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import { Question } from "./Question";

function App() {
  const today = new Date().toLocaleDateString("it-IT", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });;
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
                Elisa Pozzatti
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
            <p>Elisa Pozzatti</p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.testTitle}>
            <p>Test di Matematica - Classe 1A</p>
          </div>
        </div>
      </div>

      <div className={styles.mainInfos}>
        <div className={styles.contentInfos}>
          <div className={styles.date}>
            <p>date: {today}</p>
          </div>
          <div className={styles.session}>
            <p>session: Prima sessione</p>
          </div>
          <div className={styles.teacher}>
            <p>teacher: Prof. Bianchi</p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.contentTime}>
          <div className={styles.timeRemain}>
            <p>Tempo rimasto:</p>
          </div>
          <div className={styles.time}>
            <p>00:25:00</p>
          </div>
        </div>
      </div>

      <Question 
        domanda="Quanto fa 2+2?" 
        risposta1="3" 
        risposta2="4" 
        risposta3="5" 
        risposta4="Dipende dalla fantasia"></Question>

      <Question 
        domanda="Quanto fa 3x3?" 
        risposta1="6" 
        risposta2="9" 
        risposta3="12" 
        risposta4="Dipende dalla fantasia"></Question>

      <Question 
        domanda="Quante caramelle rimangono se ne hai 10 e ne mangi 2?" 
        risposta1="2" 
        risposta2="4" 
        risposta3="8" 
        risposta4="10 (le hai solo guardate)"></Question>

      <Question 
        domanda="Quante zampe hanno due giraffe e mezzo?" 
        risposta1="6" 
        risposta2="8" 
        risposta3="10" 
        risposta4="Dipende dalla fantasia"></Question>

    <div className={styles.main}>
        <div className={styles.contentEndTest}>
            <button className={styles.endTest}>Hai terminato? Consegna!</button>
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
