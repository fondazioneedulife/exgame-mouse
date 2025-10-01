import type { QuestionType } from "../types";
import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: QuestionType;
  response: string;
  setReponse: (value: string) => void;
};

const QuestionComponent = ({
  question,
  response,
  setReponse,
}: QuestionComponentProp) => {
  return (
    <fieldset className={styles.form}>
      <h3 className={styles.question}>{question.text} ? </h3>
      {question.answers.map((answer) => (
        <label key={answer._id}>
          <input
            type="radio"
            name={question._id}
            value={answer.answer}
            className={styles.radio}
            checked={answer._id === response}
            onChange={() => {
              console.log("Domanda: ", question, "Hai selezionato: ", answer);
              setReponse(answer._id);
            }}
          />
          {answer.answer}
        </label>
      ))}
    </fieldset>
  );
};

export default QuestionComponent;
