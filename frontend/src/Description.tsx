import styles from "./Description.module.css";


export const Description = () => {
    return (
        <>
        <section className={styles.container}>
            <p className={styles.date}>date: 12 Settembre 2025</p>
            <p className={styles.date}>session: Prima sessione</p>
            <p className={styles.date}>teacher: Prof. Bianchi</p>
        </section>
        </>
    );
}