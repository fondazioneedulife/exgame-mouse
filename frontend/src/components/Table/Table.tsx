import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import { Link } from "react-router-dom"; // ✅ corretto
import type { SubscribedExamType } from "../../pages/student/mySubscriptions";
import styles from "./Table.module.css";

type TableProps = {
  data: SubscribedExamType[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
  const hasGrade = Boolean(data[0]?.grade || data[0]?.grade === 0);

  return (
    <div className={styles.table}>
      <div className={styles.header}>
        <div className={styles.cell}>Esame</div>
        <div className={styles.cell}>Data</div>
        {hasGrade && <div className={styles.cell}>Voto</div>}
        <div className={styles.cell}>Azioni</div>
      </div>

      {data.map((subscription) => (
        <div className={styles.row} key={subscription._id}>
          <div className={styles.cell}>{subscription.name}</div>
          <div className={styles.cell}>{subscription.schedule_date}</div>

          {hasGrade && <div className={styles.cell}>{subscription.grade}</div>}

          <div className={styles.cell}>
            <ul className={styles.actions}>
              <li>
                <Link
                  to={"/subscriptions/" + subscription._id}
                  title="Visualizza esame"
                >
                  <IconEye stroke={2} size={24} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/subscriptions/" + subscription._id}
                  title="Inizia esame"
                >
                  <IconPlayerPlay stroke={2} size={24} />
                </Link>
              </li>
              <li>
                <Link
                  to={"/subscriptions/" + subscription._id}
                  title="Modifica esame"
                >
                  <IconEdit stroke={2} size={24} />
                </Link>
              </li>
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};
