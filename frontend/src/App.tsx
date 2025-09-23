import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className='header'>
        
        <div className='logo_menu'>
          <img src="/assets/ExGame logo.png" alt="" width="120px" height="50px"/>
          <div className='nav_menu'>
            <ul>
              <li>Dashboard</li>
              <li>Esami</li>
            </ul>
          </div>
        </div>

        <div className='user_menu'>
          <ul>
            <li>Mo</li>
            <li>Logout</li>
          </ul>
            
        </div>

      </div>
    </>
  )
}

export default App
