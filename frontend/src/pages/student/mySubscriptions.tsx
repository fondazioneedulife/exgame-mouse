import { TableExams } from "../../components/Table/TableExams";
import { TableIscription } from "../../components/Table/TableIscription";
import styles from "../../components/Table/Table.module.css";
import React from "react";


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

        <TableIscription
          Exam="Filosofia"
          Date="20/06/2024"
          Class="1A"
        />
        <TableIscription
          Exam="Letteratura"
          Date="15/05/2024"
          Class="2B"
        />
        <TableIscription
          Exam="Informatica"
          Date="10/07/2024"
          Class="3C"
        />
        <TableIscription Exam="Diritto" Date="05/06/2024" Class="1D" />
      </div>

      <h2>Esami sostenuti</h2>
      <TableExams />
    </>
  );
};
