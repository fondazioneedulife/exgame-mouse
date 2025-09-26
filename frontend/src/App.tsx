import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import Icona from "./assets/profilo.png";
import { Text } from "./Text";
import { Nav } from "./Nav";
import {Nomeprofilo} from "./Nomeprofilo";

function App() {
  return (
    <>
      <Nav/>
      <Nomeprofilo/>
      <Text/>

      


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
