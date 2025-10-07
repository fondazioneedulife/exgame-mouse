import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import styles from "../../components/Table/Table.module.css";
import type { mySubscription } from "../../mocks/mySubscriptions";

export const Table = ({ subscription }: { subscription: mySubscription[] }) => {
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
                {subscription.map(sub => (
                    <div className={styles.row} key={sub._id}>
                        <div className={styles.cell}>{sub.exam}</div>
                        <div className={styles.cell}>{sub.date}</div>
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
                    </div>))}
            </div>
        </>
    );
};
