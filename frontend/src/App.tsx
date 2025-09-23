import './App.css'
import logo from './assets/logo.svg'
import sans from './assets/sans.jpg'

function App() {

  return (
    <>
      {/* Header */}
      <header>
        {/* Parte Sinistra */}
        <div>
          <img src={logo} alt="Logo" className='logo'/>
          <div className='sinistra'>
            <p className='sinistra'>Dashboard</p>
            <p className='sinistra'>Esami</p>
          </div>
        </div>
        {/* Parte Destra */}
        <div>
          <p className='destra'>Nome Utente</p>
          <p className='destra'>Logout</p>
        </div>
      </header>
      {/* Parte Utente */}
      <main>
        <div className='utente'>
          <img className='imgUtente' src={sans} alt="Utente" />
          <h1>Nome Utente</h1>
        </div>
        <div>
          <h1 className='titolo'>Test di Matematica - Classe 1A</h1>
        </div>
        <div>
          <div>
            <p>Data: 23/09/2025</p>
          </div>
          <div>
            <p>Prima Sessione</p>
          </div>
          <div>
            <p>Teacher: Nome Insegnante</p>
          </div>
        </div>
      </main>
    </>
  )
}

export default App
