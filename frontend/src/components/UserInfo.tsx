import styles from "./UserInfo.module.css";
import Icona from "../assets/profilo.png";

export const UserInfo = () => {
    return(
        <div className={styles.userInfo}>
            <img src={Icona} alt="" className={styles.icona} />
            <p>Alberto Molon</p>
          </div>
    )
}