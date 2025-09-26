import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";

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

      <div className={styles.main}>

        <div className={styles.content}>

          {/* INFO STUDENTE */}
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alberto Molon</p>
          </div>

          {/* TITOLO ESAME */}
          <h1 className={styles.examTitle}>Test di Matematica - Classe 1A</h1>

          {/* INFO ESAMI BOX */}
          <div className={styles.examInfoBox}>
            <p className={styles.examInfo}>
              date: 12 settembre 2025
            </p>
            <p className={styles.examInfo}>
              session: Prima sessione
            </p>
            <p className={styles.examInfo}>
              teacher: Prof. Bianchi
            </p>
          </div>

          {/* BOX TIMER */}
          <div className={styles.timerBox}>
            <h3>Tempo rimasto:</h3>
            <p>00:25:00</p>
          </div>
          
          {/* DOMANDE */}

            <h3>Quanto fa 2 + 2?</h3>
            
            <input type="radio" id="four" name="fav_language" value="4" />
            <label htmlFor="four">4</label><br/>
            <input type="radio" id="five" name="fav_language" value="5" />
            <label htmlFor="five">5</label><br/>
            <input type="radio" id="dipende" name="fav_language" value="Dipende dalla fantasia" />
            <label htmlFor="dipende">Dipende dalla fantasia</label><br/>

            <hr />

          

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
