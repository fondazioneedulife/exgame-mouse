import type { SubscriptionType } from "../../mocks/mySubscriptions";
import styles from "./Table.module.css";
import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";

type TableProps = {
    data: SubscriptionType[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
    const hasGrade = Boolean(data[0].grade);

    return (

        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.cell}>Esame</div>
                <div className={styles.cell}>Data</div>
                {hasGrade && <div className={styles.cell}>Voto</div>}
               <div className={`${styles.cell} ${styles.actions}`}></div>
            </div>

            {data.map((subscription) => {
                return (
                    <div className={styles.row}>
                        <div className={styles.cell}>{subscription.exam}</div>
                        <div className={styles.cell}>{subscription.completed}</div>
                        <div className={styles.cell}>{subscription.date}</div>

                        {hasGrade && (
                            <div className={styles.cell}>{subscription.grade}</div>
                        )}

                        <div className={styles.cell}>
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
                );
            })}
        </div>
    );
};