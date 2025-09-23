import './App.css'
import logo from 'C:/Users/Emanuele/dev/its_progetti/exgame-mouse/doc/assets/ExGame_logo.png'

function Header() {
  // const [count, setCount] = useState(0)

  return (
    <>
    <body>
      <header>
        <nav className="navbar">
          <div className='nav-sx'>
            <img src={logo} alt="" className='logo' />
            <h4>Dashboard</h4>
            <h4>Esami</h4>
          </div>
          <div className='nav-dx'>
            <h4>Nome Utente</h4>
            <button className='btn'>Logout</button>
          </div>
        </nav>
      </header>
    </body>
    </>
  )
}

export default Header;
