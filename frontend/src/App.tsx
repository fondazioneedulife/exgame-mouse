import './App.css'
import logo from './assets/ExGame logo.svg'
import user from './assets/user-icon.svg'
function App() {


  return (
    <>
       <div className='header'>
        <div className='left-header'>
          <div className='image-div'>
            <img src={logo} className='logo' alt="logo" />
          </div>
          <div className='dashboard'>Dashboard</div>
          <div className='esami'>Esami</div>
        </div>
        <div className='right-header'>
          <div className='utente'>Jacopo Sassi</div>
          <div className='logout'>Logout</div>
        </div>
      </div>
      <div className='main'>
        <div className='card-main'>
          <img src={user} className='user-icon' alt="user-icon" />
          <p className='nome-utente'>Jacopo Sassi</p>
        </div>
        <h1 className='title'>Test di Matematica - Classe 1A</h1>
        <div className='label-list'>
          <div className='label'>Prova di Matematica</div>
          <div className='label'>Prima sessione</div>
          <div className='label'>Teacher Prof Bianchi</div>
        </div>
        <div className='timer-container'>
          <p>Tempo Rimasto</p>
          <div className='timer'>00:25:00</div>
        </div>
        <div className='question-container'>
          <p className='question'>1. Qual è il risultato di 2 + 2?</p>
          <div className='answers'>
            <div className='answer'>Ｏ 3</div>
            <div className='answer'>Ｏ 4</div>
            <div className='answer'>Ｏ 5</div>
            <div className='answer'>Ｏ 6</div>
          </div>
        </div>
        <div className='question-container'>
          <p className='question'>2. Qual è il risultato di 3 x 3?</p>
          <div className='answers'>
            <div className='answer'>Ｏ 6</div>
            <div className='answer'>Ｏ 7</div>
            <div className='answer'>Ｏ 8</div>
            <div className='answer'>Ｏ 9</div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
