import styles from './Domande.module.css';

export const Domande = ({}) => {
    return (
        <div className={styles.domanda}>
            <p className={styles.testodomanda}>Quanto fa 2+2</p>
            <ul>
                <li>
                    <button className={styles.risposta}>3</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button className={styles.risposta}>4</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button className={styles.risposta}>4</button>
                </li>
            </ul>
            <ul>
                <li>
                    <button className={styles.risposta}>Dipende dalla fantasia</button>
                </li>
            </ul>
        </div>



    );
}

