import styles from "./QuestionComponent.module.css";

export type QuestionComponentProp = {
  question: string;
  answers: string[];
  selectedAnswer?: string;
  onAnswer?: (answer: string) => void; 
};

const QuestionComponent = ({ question, answers, selectedAnswer, onAnswer }: QuestionComponentProp) => {
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (onAnswer) {
      onAnswer(e.target.value); 
    }
  };

  return (
    <div className={styles.form}>
      <h3 className={styles.question}>{question} ?</h3>
      {answers.map((answer, idx) => (
        <label key={idx}>
          <input
            type="radio"
            name={question}
            value={answer}
            checked={selectedAnswer === answer}
            onChange={handleChange}
            className={styles.radio}
          />
          {answer}
        </label>
      ))}
    </div>
  );
};

export default QuestionComponent;
