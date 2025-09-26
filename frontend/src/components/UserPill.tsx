import styles from "../App.module.css";
import Avatar from "../assets/profilo.png";

export default function UserPill() {
  return (
    <div className={styles.userPill}>
      <img src={Avatar} alt="Mario Rossi" className={styles.userAvatar} />
      <span>Mario Rossi</span>
    </div>
  );
}
