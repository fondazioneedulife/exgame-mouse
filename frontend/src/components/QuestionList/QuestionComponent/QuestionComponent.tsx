import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: string;
  answers: string[];
  response: {};
  setResponse: Function;
};

const QuestionComponent = ({ question, answers, response, setResponse }: QuestionComponentProp) => {
  return (
    <form className={styles.form}>
      <h3 className={styles.question}>{question}? </h3>
      {answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name="answer"
            value={answer}
            className={styles.radio}
            checked={response === answer}
            onChange={() => {
              console.log("Domanda: ", question, "\nHai selezionato: ", answer);
              setResponse(answer);
            }
          }
          />
          {answer}
        </label>
      ))}
    </form>
  );
};

export default QuestionComponent;
