import styles from "./App.module.css";
import Logo from "./assets/ExGame logo.svg";
import ChipList from "./components/ChipList/ChipList";
import ClockComponent from "./components/Clock/ClockComponent";
import Description from "./components/Description/Description";
import QuestionList from "./components/QuestionList/QuestionList";
import UserInfoComponent from "./components/UserInfo/UserInfoComponent";

function App() {
  // TODO Sposta questi dati nel file /mocks/chips.ts
  const chips = [
    { type: "date", testo: "12 settembre 2025" },
    { type: "session", testo: "prima sessione" },
    { type: "teacher", testo: "Prof.Bianchi" },
  ];

  // TODO Sposta questi dati nel file /mocks/questions.ts
  const questions = [
    {
      question: "Qual è la capitale della Francia",
      answers: ["Parigi", "Lione", "Marsiglia", "Nizza"],
    },
    {
      question: "Chi ha scritto 'La Divina Commedia'",
      answers: ["Dante Alighieri", "Petrarca", "Boccaccio", "Manzoni"],
    },
    {
      question: "Qual è il pianeta più vicino al Sole",
      answers: ["Mercurio", "Venere", "Terra", "Marte"],
    },
    {
      question: "In che anno è iniziata la Seconda Guerra Mondiale",
      answers: ["1939", "1914", "1945", "1929"],
    },
    {
      question: "Qual è la formula chimica dell’acqua",
      answers: ["H2O", "CO2", "O2", "NaCl"],
    },
    {
      question: "Chi dipinse la Gioconda",
      answers: ["Leonardo da Vinci", "Michelangelo", "Raffaello", "Caravaggio"],
    },
    {
      question: "Qual è la montagna più alta del mondo",
      answers: ["Everest", "K2", "Kangchenjunga", "Makalu"],
    },
    {
      question: "Quanti sono i pianeti del Sistema Solare",
      answers: ["8", "7", "9", "10"],
    },
    {
      question: "Qual è la lingua più parlata al mondo",
      answers: ["Cinese mandarino", "Inglese", "Spagnolo", "Hindi"],
    },
    {
      question: "Chi ha inventato il telefono",
      answers: ["Alexander Graham Bell", "Edison", "Marconi", "Tesla"],
    },
  ];

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
      </div>

      <div className={styles.main}>
        <div className={styles.content}>
          {/* TODO Sposta questa struttura nel componente /pages/Subscription.tsx */}
          {/* --- da qui --- */}
          <UserInfoComponent testo="Alberto Molon"></UserInfoComponent>
          <Description classe="1A" tipoDiTest="Matematica"></Description>
          <ChipList chips={chips}></ChipList>
          <ClockComponent tempo={7200}></ClockComponent>
          <QuestionList QuestionsList={questions} />
          {/* --- fino a qui --- */}
        </div>
      </div>
    </>
  )
}

export default App
