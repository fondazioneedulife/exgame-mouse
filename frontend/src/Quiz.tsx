import React from "react";
// import styles from "./Quiz.module.css";
import { Question } from "./Question";

const Quiz: React.FC = () => {
  return (
    <div>
      <h2>Test di Matematica - Classe 1A</h2>
      <p>Tempo rimasto: 00:25:00</p>

      <Question
        text="Quanto fa 2 + 27?"
        options={["3", "4", "5", "Dipende dalla fantasia"]}
        name="q1"
      />

      <Question
        text="Quanto fa 3 * 37?"
        options={["6", "9", "12", "Dipende dalla fantasia"]}
        name="q2"
      />
    </div>
  );
};

export default Quiz;
