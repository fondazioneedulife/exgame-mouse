import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import { useState } from "react";

function App() {
  const [scelta, setScelta] = useState("");
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

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.question}>
            <p>Quanto fa 2+2?</p>
            <label>
              <input
                type="radio"
                name="scelta"
                value="a"
                checked={scelta === "a"}
                onChange={(e) => setScelta(e.target.value)}
              />
              3
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="b"
                checked={scelta === "b"}
                onChange={(e) => setScelta(e.target.value)}
              />
              4
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="c"
                checked={scelta === "c"}
                onChange={(e) => setScelta(e.target.value)}
              />
              5
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="d"
                checked={scelta === "d"}
                onChange={(e) => setScelta(e.target.value)}
              />
              Dipende dalla fantasia
            </label>
        </div>
      </div>
    </div >

    <div className={styles.main}>
        <div className={styles.contentEndTest}>
          <div className={styles.endTest}>
            <p>Hai terminato? Consegna!</p>
          </div>
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
