import { Link } from "react-router";
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
                <div className={`${styles.cell} ${styles.actions}`}>{/** Azioni */}</div>
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
                    </div>
                );
            })}
        </div>
    );
};