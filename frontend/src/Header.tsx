import ExGameLogo from './assets/ExGameLogo.png'
import './Header.css'

function Header() {

    return (
    <>
        <div className = "header_tutto">
            <div className = "header_sx">
               <img src={ExGameLogo} className="logo"/>
               <button className = "bottone"> Dashboard</button>
               <button className = "bottone"> Esami</button>
            </div>
            <div className = "header_dx">
                <p className = "testo_header">Giulia Sole</p>
                <button className = "bottone"> Logout </button>
            </div>
        </div>
    </>
    )
}

export default Header