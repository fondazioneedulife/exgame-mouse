// src/components/Question.tsx
import styles from "../App.module.css";

type QuestionProps = {
  id: string;
  title: string;
  options?: string[];
  topDivider?: boolean;
};

export default function Question({
  id,
  title,
  options = [],
  topDivider = false,
}: QuestionProps) {
  return (
    <section className={styles.question}>
      {topDivider && <hr className={styles.separator} />}

      <h2 className={styles.qTitle}>{title}</h2>

      <ul className={styles.answers}>
        {options.map((opt, i) => {
          const inputId = `${id}-${i}`;
          return (
            <li key={inputId}>
              <label htmlFor={inputId}>
                <input id={inputId} type="radio" name={id} /> {opt}
              </label>
            </li>
          );
        })}
      </ul>

    </section>
  );
}
