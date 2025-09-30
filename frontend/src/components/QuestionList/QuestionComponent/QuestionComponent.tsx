import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: string;
  answers: string[];
};

const QuestionComponent = ({ question, answers }: QuestionComponentProp) => {
  return (
    <form className={styles.form}>
      <h3 className={styles.question}>{question} ? </h3>
      {answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name="answer"
            value={answer}
            className={styles.radio}
          />
          {answer}
        </label>
      ))}
    </form>
  );
};

export default QuestionComponent;
