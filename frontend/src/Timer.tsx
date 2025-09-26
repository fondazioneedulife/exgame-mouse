import styles from './Timer.module.css';


export const Timer = ({}) => {
    return (
        <section className={styles.Timer}>
            <h2 className={styles.tempo}>Tempo rimasto:</h2>
            <h2 className={styles.numeri}>00:25:00</h2>
        </section>
    );
}
