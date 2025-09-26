import styles from "./Question.module.css";

export const Question = () => {
    return(
        <div className={styles.question}>
            <h4>Quanto fa 2+2?</h4>
            <div className={styles.answer}>
              <input type="radio" name="answer" id="answer" />
              <label htmlFor="answer">3</label>
            </div>
            <div className={styles.answer}>
              <input type="radio" name="answer" id="answer" />
              <label htmlFor="answer">2</label>
            </div>
            <div className={styles.answer}>
              <input type="radio" name="answer" id="answer" />
              <label htmlFor="answer">4</label>
            </div>
            <div className={styles.answer}>
              <input type="radio" name="answer" id="answer" />
              <label htmlFor="answer">Non lo so</label>
            </div>
        </div>
    )
}