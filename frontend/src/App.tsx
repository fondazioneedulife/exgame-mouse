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
                Riccardo Borsatto
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
            <p>Riccardo Borsatto</p>
          </div>
        </div>
      </div>

      <div className={styles.main}>
        <h1 className={styles.content}>Test di Matematica - Classe 1A</h1>
      </div>

      <div className={styles.main}>
        <div className={styles.timeInfo}>
          <p className={styles.time}>Tempo rimasto:</p>
          <p>00:25:00</p>
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
