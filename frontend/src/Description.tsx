import styles from "./Description.module.css";


export const Description = ({}) => {

    return (
        <section className={styles.dati}>
            <p className={styles.texdati}>Data: 12 Settembre 2025 </p>
            <p className={styles.texdati}>Session: Prima sessione </p>
            <p className={styles.texdati}>Teacher: prof. Bianchi </p>
        </section>
    );
}
