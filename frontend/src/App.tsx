import { Link, Route, Routes } from "react-router";
import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { MySubscriptions } from "./pages/student/mySubscriptions";
import { Subscription } from "./pages/Subscription";
import { Login } from "../pages/login.tsx";
import { Logout } from "../pages/logout.tsx";
import { AuthenticationProvider } from "../components/authentication/AuthenticationProvider";

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

          <Route element={<Authenticator/>}>
            <Route index element={<MySubscriptions />} />
            <Route 
              path="subscriptions/:subscriptionId" 
              element={<Subscription />} 
            />
          </Route>

          <Route path="/login" element={<Login />}/>
          {/* Logout Route */}
          <Route path="/logout" element={<Logout />}/>

        </Routes>


        </div>
      </div>
    </AuthenticationProvider>
  );
}

export default App;
