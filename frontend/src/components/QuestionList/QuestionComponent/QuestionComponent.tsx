import styles from "./QuestionComponent.module.css";

export type QuestionType = {
  question: string;
  answers: string[];
};

export type QuestionComponentProp = QuestionType & {
  response: string;
  setReponse: (value: string) => void;
};

const QuestionComponent = ({
  question,
  answers,
  response,
  setReponse,
}: QuestionComponentProp) => {
  return (
    <fieldset className={styles.form}>
      <h3 className={styles.question}>{question} ? </h3>
      {answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={question}
            value={answer}
            className={styles.radio}
            checked={answer === response}
            onChange={() => {
              console.log("Domanda: ", question, "Hai selezionato: ", answer);
              setReponse(answer);
            }}
          />
          {answer}
        </label>
      ))}
    </fieldset>
  );
};

export default QuestionComponent;
