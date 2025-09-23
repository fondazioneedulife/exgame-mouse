import { useState } from 'react'
import Logo from './assets/ExGame logo.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>

<header className="header">
        <div className="header-left">
        <img src={Logo} className='Logo'></img>

        <nav className="nav-sinistra">
          <ul>
            <div className="pulsante">Dashboard</div>
            <div className="pulsante"> Secondo Pulsante</div>
          </ul>
        </nav>
        </div>
        <div className='header-right'>
        <nav className="nav-destra">
          <ul>
            <div className="pulsante">Terzo pulsante</div>
            <div className="pulsante">Terzo pulsante</div>
          </ul>
        </nav>
        </div>
      </header>



      <div className="body_exgame">
        <div className="examcontainer" role="region" aria-labelledby="exam-title">


          <div className="userInfo">
            <div className="avatar" aria-hidden>U</div>
            <div className="meta">
              <div style={{ fontWeight: 700 }}>Mario Rossi</div>
              <div style={{ fontSize: 12 }}>Matematica - 1A</div>
            </div>
          </div>


          <h1 id="exam-title">Test di Matematica - Classe 1A</h1>


          <div className="tags" aria-hidden>
            <div className="tag">40 minuti</div>
            <div className="tag">10 domande</div>
            <div className="tag">Svolgimento online</div>
          </div>


        <div className="timer"></div>






          <div className="content_test">
            <div className="question_text_1"></div>
            <div className="question_text_2"></div>
          </div>

        </div>

      </div>




      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
      </div>


      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


    </>
  )
}

export default App
