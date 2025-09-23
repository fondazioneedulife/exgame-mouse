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
      <div className='card-main'>
        <img src={user} className='user-icon' alt="user-icon" />
      </div>
    </>
  )
}

export default App
