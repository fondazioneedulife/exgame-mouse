import styles from "../App.module.css";
import Icona from "../assets/profilo.png";

export default function UserInfo() {
  return (
    <div className={styles.userInfo}>
      <img src={Icona} alt="Alberto Molon" className={styles.icona} />
      <p>Alberto Molon</p>
    </div>
  );
}
