import styles from "../App.module.css";

export default function TimerBox() {
  return (
    <section className={styles.timerBox}>
      <div className={styles.timerLabel}>Tempo rimasto:</div>
      <div className={styles.timerValue}>00:25:00</div>
    </section>
  );
}
