import styles from "../App.module.css";

export default function Description() {
  return (
    <div className={`${styles.description || ""} ${styles.description_info || ""}`} role="status" data-type="info">
      Oggi facciamo:
      <ul>
        <li>Esercizio 1</li>
        <li>Esercizio 2</li>
        <li>Esercizio 3</li>
      </ul>
    </div>
  );
}
