import Navbar from "./Navbar";
import MainContent from "./MainContent";
// import Description from "./components/Description"; // se lo usi

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <MainContent />

      {/*
      <Description type="info">
        <ul>
          <li>Esercizio 1</li>
          <li>Esercizio 2</li>
          <li>Esercizio 3</li>
        </ul>
      </Description>

      <Description type="warning">
        Attenzione sarà difficile!
      </Description>
      */}
    </>
  );
};

export default App;
