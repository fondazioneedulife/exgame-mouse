import styles from './App.module.css';
import Icona from './assets/profilo.png';

export const Nomeprofilo = ({}) => {
    return (
        <main className={styles.main}>
        <div className={styles.content}>
          <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alberto Molon</p>
          </div>
        </div>
      </main>
    );
}
