import { Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import Login from "./pages/Login";
import Logout from "./pages/Login";
import { AuthenticationProvider } from "./components/authentication/AuthenticationProvider";
import { CurrentUser } from "./components/CurrentsUser/Currentuser";

function App() {
  return (
    <>
      <AuthenticationProvider>
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
                  <CurrentUser />
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
              <Route path="subscriptions/:subcriptionId" element={<Subscription />} />
              <Route path="login" element={<Login />} />
              <Route path="logout" element={<Logout />} />
            </Routes>
          </div>
        </div>
      </AuthenticationProvider>
    </>
  );
}

export default App;
