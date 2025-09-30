import styles from "./QuestionComponent.module.css";

export type QuestionComponentProps = {
  question: string;
  answers: string[];
  response: string;
  setResponse: (value: string) => void;
};

const QuestionComponent = ({
  question,
  answers,
  response,
  setResponse
}: QuestionComponentProps) => {
  return (
    <form className={styles.form}>
      <h3 className={styles.question}>{question} ?</h3>
      {answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={question} // meglio unico per domanda
            value={answer}
            className={styles.radio}
            checked={answer === response}
            onChange={() =>  setResponse(answer)}
          />
          {answer}
        </label>
      ))}
    </form>
  );
};

export default QuestionComponent;
