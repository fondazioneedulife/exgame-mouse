import { Link, Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import Login from "./components/Login/login";
import Logout from "./components/Logout/logout";
import { AuthenticationProvider } from "./components/authentication/AuthenticationProvider";
import { CurrentUser } from "./components/CurrentUser/CurrentUser";
import { Authenticated } from "./components/authentication/Authenticated";
import { SocketProvider } from "./sockets/socketProvider";

function App() {
  return (
    <AuthenticationProvider>
      <SocketProvider>
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
              <Route path="/login" element={<Login />} />
              <Route path="/logout" />
            </Routes>
          </div>
        </div>
      </SocketProvider>
    </AuthenticationProvider>
  );
}

export default App;
