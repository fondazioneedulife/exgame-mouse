import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import { Subscription } from "./pages/Subscription";

function App() {

  return (
    <>
      <div className='navbar flex flex-row gap-5 justify-between items-center p-6'>
        <div className='flex flex-row gap-5 items-center'>
          <img className="w-40" src={Logo} alt="" />
          <a href="">Dashboard</a> 
          <a href="">Esami</a>
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
          <Subscription />
        </div>
      </div>
    </>
  )
}

export default App
