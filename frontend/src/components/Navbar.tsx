import styles from "../App.module.css";
import Logo from "../assets/ExGame logo.svg";

export default function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.navLeft}>
        <a href="#" className={styles.brand}>
          <img src={Logo} alt="ExGame" className={styles.logo} />
        </a>
        <ul className={styles.navList}>
          <li><a className={styles.linkLeft} href="#">Dashboard</a></li>
          <li><a className={styles.linkLeft} href="#">Esami</a></li>
        </ul>
      </div>
      <div className={styles.navRight}>
        <ul className={styles.navList}>
          <li><a className={styles.linkRight} href="#">Ale Falezza</a></li>
          <li><a className={styles.linkRight} href="#">Logout</a></li>
        </ul>
      </div>
    </nav>
  );
}
