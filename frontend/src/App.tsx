import logo from '../../doc/assets/ExGame logo.svg'
import './App.module.css'

function App() {
  
  return (
    <>
      <nav className="navbar">
        <div className="logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="nav-links">
          <div>
            <a href="#">Dashboard</a>
            <a href="#">Esami</a>
          </div>
          <div>
            <a href="#">Nome utente</a>
            <a href="#">Logout</a>
          </div>
        </div>
      </nav>
    </>
  )
}

export default App