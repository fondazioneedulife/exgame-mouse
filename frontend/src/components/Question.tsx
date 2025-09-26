import styles from "./Question.module.css";

type QuestionProps = {
  id: number; 
  question: string; 
  answers: { id: number; text: string; isCorrect: boolean }[];
}

export const Question = ({ id, question, answers }: QuestionProps) => {
  
  return (
    <div className={styles.question}>
      <h4>{question}</h4>
      {answers.map((a) => (
        <div className={styles.answer} key={a.id}>
          <input
            type="radio"
            name={`question-${id}`}   // così ogni domanda ha un gruppo separato
            id={`answer-${id}-${a.id}`}
            value={a.text}
          />
          <label htmlFor={`answer-${id}-${a.id}`}>{a.text}</label>
        </div>
      ))}
    </div>
  );
};
