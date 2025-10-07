import { IconEdit, IconEye, IconPlayerPlay } from "@tabler/icons-react";
import styles from "./Table.module.css";

function Table(props) {
    return(
     
        <div className={styles.row}>
            <div className={styles.cell}>{props.subject} - {props.class}</div>
            <div className={styles.cell}>{props.date}</div>
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
     
    )
}

export default Table;