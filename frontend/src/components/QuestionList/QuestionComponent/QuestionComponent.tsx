import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: string;
  answers: string[];
  response: string;
  setResponses: React.Dispatch<React.SetStateAction<{}>>
  id: string;
};

const QuestionComponent = ({id, question, answers, response, setResponses}: QuestionComponentProp) => {
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
            checked={answer===response}
            onChange={() => setResponses(state => {
              console.log("stato cliccato");
              const newState = {...state};
              newState[id] = answer;
              return newState;
            })}
          />
          {answer}
        </label>
      ))}
    </form>
  );
};

export default QuestionComponent;
