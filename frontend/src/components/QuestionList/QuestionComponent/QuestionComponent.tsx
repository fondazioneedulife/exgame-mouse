import type { Answer, QuestionType } from "../types";
import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: QuestionType;
  response: string;
  setResponse: (value: Answer) => void;
};

const QuestionComponent = ({
  question,
  response,
  setResponse,
}: QuestionComponentProp) => {
  return (
    <fieldset className={styles.form}>
      <h3 className={styles.question}>{question.text} ? </h3>
      {question.answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={question._id}
            value={answer.answer}
            className={styles.radio}
            checked={answer.answer === response}
            onChange={() => {
              console.log("Domanda: ", question, "Hai selezionato: ", answer);
              setResponse(answer);
            }}
          />
          {String(answer)}
        </label>
      ))}
    </fieldset>
  );
};

export default QuestionComponent;
