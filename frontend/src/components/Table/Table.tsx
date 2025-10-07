import styles from "../../components/Table/Table.module.css";
import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import { mySubscriptions } from "../../mocks/mySubscriptions";

type TableProps = {
    exam: string;
    date: string;
    grades?: string;
};

export const Table: React.FC<TableProps> = ({ exam, grades, date }) => {
    const filteredFalse = mySubscriptions.filter(e => e.completed == false)
    const filteredTrue = mySubscriptions.filter(e => e.completed == true)
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
            </div>
            <div className={styles.row}>
                <div className={styles.cell}>{exam}</div>
                <div className={styles.cell}>{date}</div>
                <div className={styles.cell}>{grades}</div>
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
    )
}