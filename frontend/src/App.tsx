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
        <form id="quiz-form">
          <div className="question-container">
            <p className="question">1. Qual è il risultato di 2 + 2?</p>
            <div className="answers">
              <label className="answer">
                <input type="radio" name="q1" value="3"/>
                <span>3</span>
              </label>
              <label className="answer">
                <input type="radio" name="q1" value="4"/>
                <span>4</span>
              </label>
              <label className="answer">
                <input type="radio" name="q1" value="5"/>
                <span>5</span>
              </label>
              <label className="answer">
                <input type="radio" name="q1" value="6"/>
                <span>6</span>
              </label>
            </div>
          </div>
          <div className="question-container">
            <p className="question">2. Qual è il risultato di 3 x 3?</p>
            <div className="answers">
              <label className="answer">
                <input type="radio" name="q2" value="6"/>
                <span>6</span>
              </label>
              <label className="answer">
                <input type="radio" name="q2" value="7"/>
                <span>7</span>
              </label>
              <label className="answer">
                <input type="radio" name="q2" value="8"/>
                <span>8</span>
              </label>
              <label className="answer">
                <input type="radio" name="q2" value="9"/>
                <span>9</span>
              </label>
            </div>
          </div>
        </form>
      </div>
    </>
  )
}

export default App
