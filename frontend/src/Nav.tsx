import styles from './App.module.css';
import Logo from './assets/ExGame logo.svg';

export const Nav = ({ }) => {
    return (
        <nav className={styles.navbar}>
            <div className={styles.left}>
                <a href="">
                    <img src={Logo} alt="" className={styles.logo} />
                </a>
                <ul>
                    <li>
                        <a href="#" className={styles.sx}>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.sx}>
                            Esami
                        </a>
                    </li>
                </ul>
            </div>

            <div className={styles.right}>
                <ul>
                    <li>
                        <a href="#" className={styles.dx}>
                            Albe Molon
                        </a>
                    </li>
                    <li>
                        <a href="#" className={styles.dx}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    );
}