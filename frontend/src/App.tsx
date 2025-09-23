import Logo from './assets/ExGame-logo.svg'
import Avatar from './assets/avatar.png'
import './App.css'

function App() {
  
  return (
    <>
    <header className='App-header'>
      <img src={Logo} className="logo" alt="Logo" />
      <p>Dashboard</p>
      <p>Esami</p>
    </header>
    <div className='studente-container'>
        <img src={Avatar} className="avatar" alt="Avatar" />
        <h2>Studente: Mario Rossi</h2>
    </div>
      <div className='title-container'> 
        <h1>Esame di storia</h1>
      </div>   
      <div className='question-container'>
        <h2>Domanda 1</h2>
        <div className='answers-container'>
          <button className='answer-button'>3</button>
          <button className='answer-button'>4</button>
          <button className='answer-button'>5</button>
          <button className='answer-button'>6</button>
        </div>

        <h2>Domanda 2</h2>
        <div className='answers-container'>
          <button className='answer-button'>3</button>
          <button className='answer-button'>4</button>
          <button className='answer-button'>5</button>
          <button className='answer-button'>6</button>
        </div>

        <h2>Domanda 3</h2>
        <div className='answers-container'>
          <button className='answer-button'>3</button>
          <button className='answer-button'>4</button>
          <button className='answer-button'>5</button>
          <button className='answer-button'>6</button>
        </div>
      </div>
    </>
  )
}

export default App
