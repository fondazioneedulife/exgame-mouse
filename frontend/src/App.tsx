import { Link, Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import { Login } from "./pages/login/login";
import { Logout } from "./pages/logout/logout";

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/">
            <img src={Logo} alt="" className={styles.logo} />
          </Link>
          <ul>
            <li>
              <Link to="/" className={styles.sx}>
                Dashboard
              </Link>
            </li>
            {/* <li>
              <a href="/" className={styles.sx}>
                Esami
              </a>
            </li> */}
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

      <div className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route index element={<MySubscriptions />} />
            <Route
              path="subscriptions/:subcriptionId"
              element={<Subscription />}
            />
            <Route path="logout" element={<Logout />} />
            <Route path="login" element={<Login/>} />
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
