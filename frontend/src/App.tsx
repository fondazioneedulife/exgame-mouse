import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <header className='App-header'>
        <img src="/src/assets/ExGame logo.svg" className='App-logo' alt='logo' />
        <p className='App-title'>Dashboard</p>
        <p className='App-subtitle'>Esami</p>

    <div className='App-user-container'>
        <h1 className='App-user'>Antonio Florea</h1>
        <h1 className='App-logout'>Log Out</h1>
              </div>
      </header>

   
      
    </>

    
  )
}

export default App
