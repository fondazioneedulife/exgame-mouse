import { Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { AuthenticatedRoutes } from "./components/Auth/AuthenticatedRoutes";
import { AuthenticationProvider } from "./components/Auth/AuthenticationProvider";
import { CurrentUser } from "./components/CurrentUser/CurrentUser";
import { Login } from "./pages/Login";
import { Logout } from "./pages/Logout";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";

function App() {
  return (
    <AuthenticationProvider>
      <nav className={styles.navbar}>
        <div className={styles.left}>
          <a href="/">
            <img src={Logo} alt="" className={styles.logo} />
          </a>
          <ul>
            <li>
              <a href="/" className={styles.sx}>
                Dashboard
              </a>
            </li>
            <li>
              <a href="/" className={styles.sx}>
                Esami
              </a>
            </li>
          </ul>
        </div>

        <div className={styles.right}>

          <CurrentUser />
        </div>
      </nav>

      <div className={styles.main}>
        <div className={styles.content}>
          <Routes>
            <Route element={<AuthenticatedRoutes />}>
              <Route index element={<MySubscriptions />} />
              <Route
                path="subscriptions/:subcriptionId"
                element={<Subscription />}
              />
            </Route>
            <Route path="login" element={<Login />} />
            <Route path="logout" element={<Logout />} />
            <Route path="*" element={<div>Not Found</div>} />
          </Routes>
        </div>
      </div>
    </AuthenticationProvider>
  );
}

export default App;
