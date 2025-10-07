import React from "react";
import { IconEye, IconPlayerPlay, IconEdit } from "@tabler/icons-react";
import styles from "../../components/Table/Table.module.css";
import type { SubscriptionType } from "../../../../api/types";
import { Link } from "react-router";

type TableProps = {
    data: SubscriptionType[];
};

export const Table: React.FC<TableProps> = ({ data }) => {
    return (
        <div className={styles.table}>
            <div className={styles.header}>
                <div className={styles.cell}>Esame</div>
                <div className={styles.cell}>Data</div>
                <div className={`${styles.cell} ${styles.actions}`}>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.cell}>Matematica - 1A</div>
                <div className={styles.cell}>20/06/2024</div>
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
            <div className={styles.row}>
                <div className={styles.cell}>Italiano - 2B</div>
                <div className={styles.cell}>15/05/2024</div>
                <div className={`${styles.cell} ${styles.actions}`}>
                    <ul>
                        <li>
                            <Link to="" title="Visualizza esame">
                                <IconEye stroke={2} />
                            </Link>
                        </li>
                        <li>
                            <Link to="" title="Inizia esame">
                                <IconPlayerPlay stroke={2} />
                            </Link>
                        </li>
                        <li>
                            <Link to="" title="Modifica esame">
                                <IconEdit />
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
            <div className={styles.row}>
                <div className={styles.cell}>Scienze - 3C</div>
                <div className={styles.cell}>10/07/2024</div>
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
        </div>

    );
};
