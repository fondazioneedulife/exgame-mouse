import header from "./Header.module.css";
import logo from "./assets/ExGame logo.svg";

function Header() {
    return (
            <nav className={header.navbar}>
            <div className={header.left}>
            <a href="">
                <img src={logo} alt="" className={header.logo} />
            </a>
            <ul>
                <li>
                <a href="#" className={header.sx}>
                    Dashboard
                </a>
                </li>
                <li>
                <a href="#" className={header.sx}>
                    Esami
                </a>
                </li>
            </ul>
            </div>

            <div className={header.right}>
            <ul>
                <li>
                <a href="#" className={header.dx}>
                    Nome Utente
                </a>
                </li>
                <li>
                <a href="#" className={header.dx}>
                    Logout
                </a>
                </li>
            </ul>
            </div>
        </nav>
    );
}

export default Header;