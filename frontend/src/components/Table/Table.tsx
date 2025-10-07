import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react"
import styles from "../../components/Table/Table.module.css";
import type { SubscriptionType } from "../../mocks/mySubscriptions";

type TableProps = {
    data: SubscriptionType[];
}

export const Table: React.FC<TableProps> = ({ data }) => {

    return (
        <>
            <div className={styles.table}>
                <div className={styles.header}>
                    <div className={styles.cell}>Esame</div>
                    <div className={styles.cell}>Data</div>
                    <div className={`${styles.cell} ${styles.actions}`}>
                        {/** Azioni */}
                    </div>
                </div>
                
                {data.map((subscription) => {
                    return (
                        <div className={styles.row}>
                            <div className={styles.cell}>{subscription.exam}</div>
                            <div className={styles.cell}>{subscription.date}</div>
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
                        </div>)
                }

                )}

                
            </div>
        </>
    )
}