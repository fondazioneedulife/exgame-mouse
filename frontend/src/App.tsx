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

      <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alberto Molon</p>
          </div>
        </div>
        <h1 className={styles.title}>Test di Matematica - Classe 1A</h1>
        <div className={styles.labelList}>
          <div className={styles.label}>Date: 12 Settembre 2025</div>
          <div className={styles.label}>Session: Prima Sessione</div>
          <div className={styles.label}>Teacher: Prof Bianchi</div>
        </div>
        <div className={styles.timerContainer}>
          <p>Tempo Rimasto</p>
          <div className={styles.timer}>00:25:00
          </div>
        </div>
        <form className={styles.form}>
          <div className={styles.questionContainer}>
            <p className={styles.question}>Quanto fa 2 + 2?</p>
            <div className={styles.AllAnswers}>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="3" />
                <span> 3</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="4" />
                <span> 4</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="5" />
                <span> 5</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="6" />
                <span> Dipende dalla fantasia</span>
              </label>
            </div>
          </div>
            <div className={styles.questionContainer}>
            <p className={styles.question}>Quanto fa 3 x 3?</p>
            <div className={styles.AllAnswers}>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="3" />
                <span> 6</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="4" />
                <span> 9</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="5" />
                <span> 12</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="6" />
                <span> Dipende dalla fantasia</span>
              </label>
            </div>
          </div>
          <div className={styles.questionContainer}>
            <p className={styles.question}>Quante caramelle rimangono se ne hai 10 e ne mangi 2?</p>
            <div className={styles.AllAnswers}>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="3" />
                <span> 2</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="4" />
                <span> 4</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="5" />
                <span> 8</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="6" />
                <span> 10 (le hai solo guardate)</span>
              </label>
            </div>
          </div>
          <div className={styles.questionContainer}>
            <p className={styles.question}>Quante zampe hanno due giraffe e mezzo?</p>
            <div className={styles.AllAnswers}>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="3" />
                <span> 6</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="4" />
                <span> 8</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="5" />
                <span> 10</span>
              </label>
              <label className={styles.answer}>
                <input type="radio" name="q1" value="6" />
                <span> Dipende dalla fantasia</span>
              </label>
            </div>
          </div>
        </form>
        <div className={styles.WrapperContainer}>
          <button className={styles.submitButton} type="submit">Hai terminato? Consegna!</button>
        </div>
      </main>

    </>
  );
}

export default App;
