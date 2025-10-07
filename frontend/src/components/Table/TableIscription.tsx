import styles from "../../components/Table/Table.module.css";
import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
export function TableIscription ({Exam,Date,Class})
{
  return (
    <>
        <div className={styles.row}>
          <div className={styles.cell}>{Exam} - {Class}</div>
          <div className={styles.cell}>{Date}</div>
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
    </>
  );

}
