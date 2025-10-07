import styles from "../../components/Table/Table.module.css";
import ExamTable from "../../components/Table/ExamTable";
import CompletedExamTable from "../../components/Table/CompletedExamTable";
import { mySubscriptions } from "../../mocks/mySubscriptions";

const exams = mySubscriptions.filter(sub => !sub.completed).map(sub => ({
  subject: sub.exam,
  class: sub.class,
  date: sub.date,
}));

const completedExams = mySubscriptions.filter(sub => sub.completed).map(sub => ({
  subject: sub.exam,
  class: sub.class,
  grade: sub.grade,
  date: sub.date,
}));

export const MySubscriptions: React.FC = () => {
  return (
    <>
      <h2>Le mie iscrizioni</h2>

      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Esame</div>
          <div className={styles.cell}>Data</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            {/** Azioni */}
          </div>
        </div>
          {exams.map((exam, index) => (
            <ExamTable key={index} subject={exam.subject} class={exam.class} date={exam.date} />
          ))}
      </div>
      
      <h2>Esami sostenuti</h2>

      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Esame</div>
          <div className={styles.cell}>Esito</div>
          <div className={styles.cell}>Data</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            {/** Azioni */}
          </div>
        </div>
          {completedExams.map((exam, index) => (
            <CompletedExamTable key={index} subject={exam.subject} class={exam.class} grade={exam.grade} date={exam.date} />
          ))}
      </div>
    </>
  );
};
