import styles from "../../components/Table/Table.module.css";
import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
export function TableExams() {
  return (
    <>
      <div className={styles.table}>
        <div className={styles.header}>
          <div className={styles.cell}>Esame</div>
          <div className={styles.cell}>Esito</div>
          <div className={styles.cell}>Data</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            {/** Azioni */}
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>Matematica - 1A</div>
          <div className={styles.cell}>10</div>
          <div className={styles.cell}>20/06/2024</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            <ul>
              <li>
                <a href="" title="Visualizza esame">
                  <IconEye stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Inizia esame">
                  <IconPlayerPlay stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Modifica esame">
                  <IconEdit />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>Italiano - 2B</div>
          <div className={styles.cell}>6</div>
          <div className={styles.cell}>15/05/2024</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            <ul>
              <li>
                <a href="" title="Visualizza esame">
                  <IconEye stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Inizia esame">
                  <IconPlayerPlay stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Modifica esame">
                  <IconEdit />
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.cell}>Scienze - 3C</div>
          <div className={styles.cell}>4</div>
          <div className={styles.cell}>10/07/2024</div>
          <div className={`${styles.cell} ${styles.actions}`}>
            <ul>
              <li>
                <a href="" title="Visualizza esame">
                  <IconEye stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Inizia esame">
                  <IconPlayerPlay stroke={2} />
                </a>
              </li>
              <li>
                <a href="" title="Modifica esame">
                  <IconEdit />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}
