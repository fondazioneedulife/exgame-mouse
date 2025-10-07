import { TableExams } from "../../components/Table/TableExams";
import { TableIscription } from "../../components/Table/TableIscription";
import styles from "../../components/Table/Table.module.css";
import React from "react";
import { mySubscriptions } from "../../mocks/mySubscriptions";


export const MySubscriptions: React.FC = () => {

  return (
    <>
      <h2>Le mie iscrizioni</h2>

      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Esame</div>
          <div className={styles.cell}>Data</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            {/* Azioni */}
          </div>
        </div>
        {mySubscriptions.map((subscription) => (
          <TableIscription
            key={subscription._id}
            Exam={subscription.exam}
            Date={subscription.date}
            Class={subscription.class}
          />
        ))}
      </div>

      <h2>Esami sostenuti</h2>

      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Esame</div>
          <div className={styles.cell}>Esito</div>
          <div className={styles.cell}>Data</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            {/* Azioni */}
          </div>
        </div>

        {mySubscriptions.map((subscription) => (
          <TableExams
            key={subscription._id}
            ExamGeneral={subscription.exam}
            DateGeneral={subscription.date}
            MarkGeneral={subscription.mark}
            ClassGeneral={subscription.class}
          />
        ))}
      </div>
    </>
  );
};
