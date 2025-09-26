import { useState } from "react";
import styles from "./App.module.css";
type QuestionProps = {domanda: string, risposta1: string, risposta2: string, risposta3: string, risposta4: string};

export const Question: React.FC<QuestionProps> = ({domanda, risposta1, risposta2, risposta3, risposta4}) => {
    const [scelta, setScelta] = useState("");
    return(
        <div className={styles.main}>
        <div className={styles.content}>
          <div className={styles.question}>
            <p>{domanda}</p>
            <label>
              <input
                type="radio"
                name="scelta"
                value="a"
                checked={scelta === "a"}
                onChange={(e) => setScelta(e.target.value)}
              />
              {risposta1}
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="b"
                checked={scelta === "b"}
                onChange={(e) => setScelta(e.target.value)}
              />
              {risposta2}
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="c"
                checked={scelta === "c"}
                onChange={(e) => setScelta(e.target.value)}
              />
              {risposta3}
            </label>
            <label>
              <input
                type="radio"
                name="scelta"
                value="d"
                checked={scelta === "d"}
                onChange={(e) => setScelta(e.target.value)}
              />
              {risposta4}
            </label>
        </div>
      </div>
    </div >
    );
}