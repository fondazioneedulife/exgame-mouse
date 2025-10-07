import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Routes, Route, Link } from "react-router";
import { Subscription } from "./pages/Subscription";

function App() {
  return (
    <>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <a href="">
            <img src={Logo} alt="" className={styles.logo} />
          </a>
          <ul>
            <li>
              <Link to="/subscriptions" className={styles.sx}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="/subscriptions" className={styles.sx}>
                Esami
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <Link to="/subscriptions" className={styles.dx}>
                Albe Molon
              </Link>
            </li>
            <li>
              <Link to="/subscriptions" className={styles.dx}>
                Logout
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route index element={<MySubscriptions/>}/>
            <Route path="/subscriptions" element={<Subscription/>}/>
          </Routes>
        </div>
      </div>
    </>
  );
}

export default App;
