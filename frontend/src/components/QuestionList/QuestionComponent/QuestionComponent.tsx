import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: string;
  answers: string[];
  response: string;
};

const QuestionComponent = ({ question, answers }: QuestionComponentProp) => {

  console.log(
    "Lo stato in questo momento è:", 
    JSON.stringify(responses, null, 2)
  )

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
            value={answer}
            className={styles.radio}
            checked={answer === response}
            onChange={() => {console.log("Doamnda: ", question, "Hai selezionato", answer) setResponses(answer)}}
          />
          {answer}
        </label>
      ))}
    </form>
  );
};

export default QuestionComponent;
