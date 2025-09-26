import styles from "./App.module.css";
import { Navigation } from "./components/Navigation";
import { UserInfo } from "./components/UserInfo";

function App() {
  return (
    <>
    <Navigation />
      <div className={styles.main}>
        <div className={styles.content}>
          <UserInfo />
        </div>
      </div>

      {/* <Description type="info"> Oggi facciamo:
        <ul>
          <li>Esercizio 1</li>
          <li>Esercizio 2</li>
          <li>Esercizio 3</li>
        </ul> 
      </Description>

      <Description type="warning"> 
        Attenzione sarà difficile!
      </Description> */}
    </>
  );
}

export default App;
