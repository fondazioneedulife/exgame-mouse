import styles from "./App.module.css";
import { Navigation } from "./components/Navigation";
import { Question } from "./components/Question";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <>
    <Navigation />
    <div className={styles.main}>
      <div className={styles.content}>
        <UserInfo />
        <div className={styles.container}>
          <div className={styles.materia}>
            <h2>Test di Matematica - Classe 1A</h2>
          </div>

          <div className={styles.info}>
            <div>
                <p>Bla Bla</p>
            </div>
            <div>
              <p>Bla Bla</p>
            </div>
            <div>
              <p>Bla Bla</p>
            </div>
          </div>
          
          <div className={styles.time}>
            <p className={styles.timeLable}>
              Tempo rimasto
            </p>
            <p className={styles.timeValue}>
              00:25:00
            </p>
          </div>

          <div className={styles.questions}>
            <Question />
            <Question />
            <Question />
            <Question />
            <Question />
          </div>

        </div>
      </div>
    </div>

    </>
  );
}

export default App;
