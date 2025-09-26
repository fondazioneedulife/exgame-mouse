import styles from "./App.module.css";
import Icona from "./assets/profilo.png";

const UserInfo: React.FC = () => {
  return (
    <>
    <div className={styles.userInfo}>
      <img src={Icona} alt="Profilo" className={styles.icona} />
      <p>Emanuele Pio</p>
    </div>
    </>
    
  );
};

export default UserInfo;
