import styles from "./Timer.module.css"

export const Timer =  () => {
    return(
        <>
            <div className={styles.container}>
                <h2 className={styles.titolo}>Tempo rimasto:</h2>
                <h2 className={styles.tempo}>00:25:00</h2>
            </div>
        </>
    )
}