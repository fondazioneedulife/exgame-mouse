import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import { Description } from "./Description";
import {Title} from "./Title"
import {Timer} from "./Timer"
import { Question } from "./Question";

const domande = [
  {
    titolo: "Quanto fa 2 + 2?",
    risposta1: "3",
    risposta2: "4",
    risposta3: "5",
    risposta4: "Dipende dalla fantasia",
  },
  {
    titolo: "Quanto fa 3 * 3?",
    risposta1: "6",
    risposta2: "9",
    risposta3: "12",
    risposta4: "Dipende dalla fantasia",
  },
  {
    titolo: "Quante caramelle rimangono se ne hai 10 e ne mangi 2?",
    risposta1: "2",
    risposta2: "4",
    risposta3: "8",
    risposta4: "10 (le hai solo guardate)",
  },
  {
    titolo: "Quante zampe hanno deu giraffe e mezzo?",
    risposta1: "6",
    risposta2: "8",
    risposta3: "10",
    risposta4: "Dipende dalla fantasia",
  },
];


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

        <main className={styles.right}>
          <ul>
            <li>
              <a href="#" className={styles.dx}>
                Alessandro Molon
              </a>
            </li>
            <li>
              <a href="#" className={styles.dx}>
                Logout
              </a>
            </li>
          </ul>
        </main>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alessandro Molon</p>
          </div>
        </div>
        <Title />
        <Description />
        <Timer />

        {domande.map((domanda) => (
          <Question
            titolo={domanda.titolo}
            risposta1={domanda.risposta1}
            risposta2={domanda.risposta2}
            risposta3={domanda.risposta3}
            risposta4={domanda.risposta4}
          />
        ))}
      </div>
    </>
  );
}

export default App;
