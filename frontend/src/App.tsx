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
                Antonio Florea
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

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Antonio Florea</p>
          </div>
        </div>
      

    <h1>Test di Matematica - Classe 1A</h1>

<div className={styles.container}>
    <input type="text" placeholder="date: 12 settembre 2025" className={styles.searchBar} />
        <input type="text" placeholder="session:Prima sessione" className={styles.searchBar} />
    <input type="text" placeholder="teacher:prof Bianchi" className={styles.searchBar} />
    </div>


<div className={styles.timer}>
  <p>Tempo rimasto: </p>
  <p className={styles.minuti}>00:45:00</p>
</div>



<div className={styles.question}>
  <p>Quanto fa 2 + 2?</p>
  <ul className={styles.answers}>
      <li>
        <input type="radio" name="q1" value="3" placeholder="3" /> 3
      </li>
      <li>
        <input type="radio" name="q1" value="4" placeholder="4" /> 4
      </li>
      <li>
        <input type="radio" name="q1" value="5" placeholder="5" /> 5
      </li>
      <li>
        <input type="radio" name="q1" value="fantasia" placeholder="fantasia" /> Dipende dalla fantasia
      </li>
  </ul>
</div>



<div className={styles.question}>
  <p>Quanto fa 3 X 3?</p>
  <ul className={styles.answers}>
      <li>
        <input type="radio" name="q2" value="6" placeholder="6" /> 6
      </li>
      <li>
        <input type="radio" name="q2" value="9" placeholder="9" /> 9
      </li>
      <li>
        <input type="radio" name="q2" value="12" placeholder="12" /> 12
      </li>
      <li>
        <input type="radio" name="q2" value="fantasia" placeholder="fantasia" /> Dipende dalla fantasia
      </li>
  </ul>
</div>




<div className={styles.question}>
  <p>Quante caramelle rimangono se ne hai 10 e ne mangi 2?</p>
  <ul className={styles.answers}>
      <li>
        <input type="radio" name="q3" value="2" placeholder="2" /> 2
      </li>
      <li>
        <input type="radio" name="q3" value="4" placeholder="4" /> 4
      </li>
      <li>
        <input type="radio" name="q3" value="8" placeholder="8" /> 8
      </li>
      <li>
        <input type="radio" name="q3" value="guardate" placeholder="guardate" /> 10 (le hai solo guardate)
      </li>
  </ul>
</div>




<div className={styles.question}>
  <p>Quante zampe hanno due giraffe e mezzo?</p>
  <ul className={styles.answers}>
      <li>
        <input type="radio" name="q4" value="6" placeholder="6" /> 6
      </li>
      <li>
        <input type="radio" name="q4" value="8" placeholder="8" /> 8
      </li>
      <li>
        <input type="radio" name="q4" value="10" placeholder="10" /> 10
      </li>
      <li>
        <input type="radio" name="q4" value="fantasia" placeholder="fantasia" /> Dipende dalla fantasia
      </li>
  </ul>
</div>



<button className={styles.submitButton}>Hai terminato? Consegna!</button>

</main>

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
