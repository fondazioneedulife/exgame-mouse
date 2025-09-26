import styles from "./App.module.css";
import { Navigation } from "./components/Navigation";
import { Question } from "./components/Question";
import { UserInfo } from "./components/UserInfo";
import questions from "./data/questions.json"

function App() {
  return (
    <>
    <div className={styles.main}>
      <Navigation />
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
            <form>
              {questions.map((q) => (
                <Question
                  key={q.id}
                  id={q.id}
                  question={q.question}
                  answers={q.answers}
                />
              ))}

              <button type="submit" className={styles.btnSubmit}>
                <p>Hai terminato? Consegna!</p>
              </button>
            </form>
          </div>

        </div>
      </div>
    </div>

    </>
  );
}

export default App;
