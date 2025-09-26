import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";


import { Text } from "./Text";
import { Nav } from "./Nav";
import {Nomeprofilo} from "./Nomeprofilo";
import { Description } from "./Description";
import { Timer } from "./Timer";

function App() {
  return (
    <>

      <Nav/>
      <main className={styles.main}>
        <Nomeprofilo/>
        <Text/>
        <Description/>
        <Timer/>
      </main>


      






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
