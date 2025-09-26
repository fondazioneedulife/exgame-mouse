import styles from "./App.module.css";
import icon from "./assets/profilo.png";
import Header from "./Header";
import Questions from "./Questions";

function App() {
  return (
    <>
      <Header />
      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={icon} alt="" className={styles.icon} />
            <p>Nome Utente</p>
          </div>
        </div>
      </div>

      <main className={styles.examBody}>
        <h1 className={styles.examTitle}>Test di Matematica - Classe 1A</h1>

        <div className={styles.tags}>
          <p>Date 12 Settembre 2025</p>
          <p>Session: Prima Sessione</p>
          <p>Teacher: Nome Insegnante</p>
        </div>

        <div className={styles.timer}>
          <h3>Tempo Rimasto</h3>
          <h3>00:25:00</h3>
        </div>

        <Questions questionText="Quanto fa 2 + 2?" response1="3" response2="4" response3="5" response4="Dipende dalla Fantasia"/>
        <Questions questionText="Quanto fa 3 x 3?" response1="6" response2="9" response3="12" response4="Dipende dalla Fantasia"/>
        <Questions questionText="Quante caramelle rimangono se ne hai 10 e ne mangi 2?" response1="2" response2="4" response3="8" response4="10 (Le hai solo Guardate)"/>
        <Questions questionText="Quanto zampe hanno 2 giraffe e mezzo?" response1="6" response2="8" response3="10" response4="Dipende dalla Fantasia"/>
        
        <center>
          <button>Hai terminato? Consegna!</button>
        </center>

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
