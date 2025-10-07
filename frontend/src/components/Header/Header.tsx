import headerStyle from "./Header.module.css"
import logo from "../../assets/ExGame logo.svg";

function Header() {
    return (
        <nav className={headerStyle.navbar}>
            <div className={headerStyle.left}>
                <a href="">
                    <img src={logo} alt="" className={headerStyle.logo} />
                </a>
                <ul>
                    <li>
                        <a href="#" className={headerStyle.sx}>
                            Dashboard
                        </a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.sx}>
                            Esami
                        </a>
                    </li>
                </ul>
            </div>

            <div className={headerStyle.right}>
                <ul>
                    <li>
                        <a href="#" className={headerStyle.dx}>
                            Albe Molon
                        </a>
                    </li>
                    <li>
                        <a href="#" className={headerStyle.dx}>
                            Logout
                        </a>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Header;