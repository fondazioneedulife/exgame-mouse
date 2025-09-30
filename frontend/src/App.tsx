import styles from "./App.module.css";
import { Subscription } from "./pages/Subscription";
import Header from "./components/Header/Header";

function App() {
  return (
    <>

      <Header/>
      <div className={styles.main}>
        <div className={styles.content}>
          <Subscription/>
        </div>
      </div>
    </>
  );
}

export default App;
