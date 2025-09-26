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
                Andrea Nocentini
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
            <p>Andrea Nocentini</p>
          </div>
        </div>
      </div>

      <div className={styles.titolo}>
        <h1>Test di Matematica - Classe 1A</h1>
      </div>

      <div className={styles.info}>
        <p>date: 12 settembre 2025</p>
        <p>session: prima sessione</p>
        <p>teacher: Prof. Bianchi</p>
      </div>

      <div className={styles.timer}>
        <h3>Tempo rimasto:</h3>
        <p>00:25:00</p>
      </div>

      <div className={styles.domande}>
        <h2 className={styles.consegna}>Quanto fa 2 + 2?</h2>
      
            <input type="radio" name="q1" value="1" id="q1a" /> 
            <label htmlFor="q1a"> 3 </label> <br/>
      
            <input type="radio" name="q1" value="2" id="q1b" />
            <label htmlFor="q1b"> 4 </label> <br/>
       
            <input type="radio" name="q1" value="3" id="q1c" />
            <label htmlFor="q1c"> 5 </label> <br/>
       
            <input type="radio" name="q1" value="4" id="q1d" />
            <label htmlFor="q1d"> Dipende dalla fantasia </label> <br/>

            <hr className={styles.linea}></hr>
   

        <h2 className={styles.consegna}>Quanto fa 3 x 3?</h2>
      
            <input type="radio" name="q2" value="1" id="q2a" />
            <label htmlFor="q2a"> 6 </label> <br/>
         
            <input type="radio" name="q2" value="2" id="q2b" />
            <label htmlFor="q2b"> 9 </label> <br/>
       
            <input type="radio" name="q2" value="3" id="q2c" />
            <label htmlFor="q2c"> 12 </label> <br/>
        
            <input type="radio" name="q2" value="4" id="q2d" />
            <label htmlFor="q2d"> Dipende dalla fantasia </label> <br/>

            <hr className={styles.linea}></hr>


        <h2 className={styles.consegna}>Quante caramelle rimangono se ne hai 10 e ne mangi 2?</h2>
  
            <input type="radio" name="q3" value="1" id="q3a" />
            <label htmlFor="q3a"> 2 </label> <br/>
        
            <input type="radio" name="q3" value="2" id="q3b" />
            <label htmlFor="q3b"> 4 </label> <br/>
       
            <input type="radio" name="q3" value="3" id="q3c" />
            <label htmlFor="q3c"> 8 </label> <br/>
   
            <input type="radio" name="q3" value="4" id="q3d" />
            <label htmlFor="q3d"> 10 (le hai solo guardate) </label> <br/>

            <hr className={styles.linea}></hr>


        <h2 className={styles.consegna}>Quante zampe hanno due giraffe e mezzo?</h2>
  
            <input type="radio" name="q4" value="1" id="q4a" />
            <label htmlFor="q4a"> 6 </label> <br/>

            <input type="radio" name="q4" value="2" id="q4b" />
            <label htmlFor="q4b"> 8 </label> <br/>
  
            <input type="radio" name="q4" value="3" id="q4c" />
            <label htmlFor="q4c"> 10 </label> <br/>
    
            <input type="radio" name="q4" value="4" id="q4d" />
            <label htmlFor="q4d"> Dipende dalla fantasia </label> <br/>

            <hr className={styles.linea}></hr>
    
      </div>

      <div className={styles.inviaRisposte}>
        <button className={styles.bottone}>Hai terminato? Consegna!</button>
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
