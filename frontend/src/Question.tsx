import styles from "./App.module.css";

type QuestionProps = {
  title: string;
  answer: string[];
};

export function Question({ title, answer }: QuestionProps) {
  return (
    <div>
        <div className={styles.questionContainer}>
            <p className={styles.questionTitle}>{title}</p>
            {answer.map((answer, idx) => (
                <label className={styles.answer} key={idx}>
                    <input type="radio" />
                    <p>{answer}</p>
                </label>
            ))}
        </div>
        <div className={styles.line}></div>
    </div>
  );
}