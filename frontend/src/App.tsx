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
        <div className='flex flex-row gap-5 items-center'>
          <a href="">nome</a>
          <a href="">Logout</a>
        </div>
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          <Subscription />
        </div>
        <p className='font-bold text-4xl text-black'>Test di Matematica - Classe 1A</p>
      </div>
    </>
  )
}

export default App
