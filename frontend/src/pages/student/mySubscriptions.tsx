import styles from "../../components/Table/Table.module.css";
import { Table } from "../../components/Table/Table";
import { mySubscriptions } from "../../mocks/mySubscriptions";

export const MySubscriptions: React.FC = () => {
  const filteredFalse = mySubscriptions.filter(e => e.completed==false)
  const filteredTrue = mySubscriptions.filter(e => e.completed==true)
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
          
          {filteredFalse.map((sub, index) => {
            return (
              <Table
                key={index}
                exam={sub.exam}
                date={sub.date}
                grades={sub.grades !== undefined ? sub.grades.toString() : undefined}
              />
            )
          })}
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
          {filteredTrue.map((sub, index) => {
            return (
              <Table
                key={index}
                exam={sub.exam}
                date={sub.date}
                grades={sub.grades !== undefined ? sub.grades.toString() : undefined}
              />
            )
          })}
        </div>
      </>
      );
};
