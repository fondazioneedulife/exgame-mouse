import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "react-router";
import styles from "../../components/Table/Table.module.css";
export function TableIscription({ Exam, Date, Class }) {
  return (
    <>
      <div className={styles.row}>
        <div className={styles.cell}>
          {Exam} - {Class}
        </div>
        <div className={styles.cell}>{Date}</div>
        <div className={`${styles.cell} ${styles.actions}`}>
          <ul>
            <li>
              <Link to="/Subscription" title="Visualizza esame">
                <IconEye stroke={2} />
              </Link>
            </li>
            <li>
              <Link to="/Subscription" title="Inizia esame">
                <IconPlayerPlay stroke={2} />
              </Link>
            </li>
            <li>
              <Link to="/Subscription" title="Modifica esame">
                <IconEdit />
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </>
  );
}
