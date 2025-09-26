import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import Test from './Test.tsx'

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
                Giulia Sole
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
        <div className={styles.contentInterno}>
          <h1>Test di Matematica - Classe 1A</h1>
        </div>
        <div className= {styles.informazioni}>
          <p className = {styles.infSingola}>date: 26 settembre 2025</p>
          <p className = {styles.infSingola}>session: prima sessione</p>
          <p className = {styles.infSingola}>teacher: Prof. Bianche</p>
        </div>
        <div className = {styles.timer}>
          <p className={styles.scritta}>Tempo rimasto:</p>
          <p className={styles.scrittaDue}>00:25:00</p>
        </div>
        <div className= {styles.gruppiDomande}>
          <div className= {styles.domanda}>
            <h3>Quanto fa 2 + 2</h3>
            <label><input type="radio" name="2piu2"/> 3</label>
            <label><input type="radio" name="2piu2"/> 4</label>
            <label><input type="radio" name="2piu2"/> 5</label>
            <label><input type="radio" name="2piu2"/> Pesce</label>
          </div>
          <div className= {styles.domanda}>
            <h3>Quanto fa 3 x 3</h3>
            <label><input type="radio" name="3per3"/> 6</label>
            <label><input type="radio" name="3per3"/> 9</label>
            <label><input type="radio" name="3per3"/> 12</label>
            <label><input type="radio" name="3per3"/> Per3, quindi pere</label>
          </div>
          <div className= {styles.domanda}>
            <h3>Quante caramelle rimangono se ne ha 10 e ne mangi 2?</h3>
            <label><input type="radio" name="caramelle"/> 2</label>
            <label><input type="radio" name="caramelle"/> 4</label>
            <label><input type="radio" name="caramelle"/> 8</label>
            <label><input type="radio" name="caramelle"/> 0, le altre le ho mangiate io :P</label>
          </div>
          <div className= {styles.domanda}>
            <h3>Quante gambe hanno due giraffe e mezzo?</h3>
            <label><input type="radio" name="serpenti"/> 6</label>
            <label><input type="radio" name="serpenti"/> 8</label>
            <label><input type="radio" name="serpenti"/> 10</label>
            <label><input type="radio" name="serpenti"/> 0, in realtà erano serpenti</label>
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
