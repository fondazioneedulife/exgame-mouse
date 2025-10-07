import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import styles from "./Table.module.css";
import type { SubscriptionType } from "../../mocks/mySubscriptions";
import { Link } from "react-router";


export const Table = ({ subscriptions }:{subscriptions:SubscriptionType[]}) => {
  const grade = subscriptions.find((sub) => sub.grade !== undefined);
  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div className={styles.cell}>Esame</div>
        <div className={styles.cell}>Data</div>
        {grade ? <div className={styles.cell}>Voto</div>: null}
        <div className={`${styles.cell} ${styles.actions}`}>
          {/** Azioni */}
        </div>
      </div>

      {subscriptions.map((sub) => (
      <div className={styles.row}>
        <div className={styles.cell}>{sub.exam}</div>
        <div className={styles.cell}>{sub.date}</div>
        {grade ? <div className={styles.cell}>{sub.grade}</div>: null}
        <div className={`${styles.cell} ${styles.actions}`}>
          <ul>
            <li>
              <Link to="/subscription" title="Visualizza esame">
                <IconEye stroke={2} />
              </Link>
            </li>
            <li>
              <Link to="/subscription" title="Inizia esame">
                <IconPlayerPlay stroke={2} />
              </Link>
            </li>
            <li>
              <Link to="/subscription" title="Modifica esame">
                <IconEdit />
              </Link>
            </li>
          </ul>
        </div>
      </div>))}
    </div>
  );
};
