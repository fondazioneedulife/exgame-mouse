import { Link, Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { AuthenticationProvider } from "./components/Authentication/AuthenticationProvider";
import { CurrentUser } from "./components/CurrentUser/CurrentUser";
import { Login } from "./components/Login/Login";
import { Logout } from "./components/Logout/Logout";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import { Authenticated } from "./components/Authentication/Authenticated";

function App() {
  return (
    <AuthenticationProvider>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <Link to="/">
            <img src={Logo} alt="" className={styles.logo} />
          </Link>
          <ul>
            <li>
              <Link to="#" className={styles.sx}>
                Dashboard
              </Link>
            </li>
            <li>
              <Link to="#" className={styles.sx}>
                Esami
              </Link>
            </li>
          </ul>
        </div>

        <div className={styles.right}>
          <ul>
            <li>
              <Link to="#" className={styles.dx}>
                <CurrentUser />
              </Link>
            </li>
            <li>
              <Logout />
            </li>
          </ul>
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route element={<Authenticated />}>
              <Route index element={<MySubscriptions />} />
              <Route
                path="subscriptions/:subcriptionId"
                element={<Subscription />}
              />
            </Route>
            <Route path="login" element={<Login />} />
            {/* <Route path="logout" element={<Logout />} /> */}
          </Routes>
        </div>
      </div>
    </AuthenticationProvider>
  );
}

export default App;
