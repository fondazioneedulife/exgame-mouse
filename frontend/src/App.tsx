import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import { Route, Routes, Link } from "react-router";



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

      <div className={styles.main}>
        <div className={styles.content}>

          <Routes>
            <Route index element={<MySubscriptions />} />
            <Route path="subscription" element={<Subscription/>} />
          </Routes>

        </div>
      </div>
    </>
  );
}

export default App;
