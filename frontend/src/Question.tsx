import styles from "./Question.module.css";

export const Question = ({ titolo, risposta1, risposta2, risposta3, risposta4 }) => {
  return (
    <div className={styles.container}>
      <h3 className={styles.titolo}>{titolo}</h3>
      <ul>
        <li>{risposta1}</li>
        <li>{risposta2}</li>
        <li>{risposta3}</li>
        <li>{risposta4}</li>
      </ul>
      <hr className={styles.riga}/>
    </div>
  );
};
