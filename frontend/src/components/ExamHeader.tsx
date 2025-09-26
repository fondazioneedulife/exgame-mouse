import styles from "../App.module.css";

export default function ExamHeader() {
  return (
    <>
      <h1 className={styles.title}>Test di Matematica - Classe 1A</h1>
      <div className={styles.chips}>
        <span className={styles.chip}><b>date:</b> 12 settembre 2025</span>
        <span className={styles.chip}><b>session:</b> Prima sessione</span>
        <span className={styles.chip}><b>teacher:</b> Prof. Bianchi</span>
      </div>
    </>
  );
}
