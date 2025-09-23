import { useState } from 'react'
import Logo from './assets/ExGame logo.svg'
import User from './assets/user.png'
import './App.css'
// import { Description } from './components/Description'
// import { PageTitle } from './components/PageTitle'

function App() {

  return (
    <>
    <header className='header'>
      <div className='header-sx'>
        <img src={Logo} alt="logo" width={"110px"}/>
        <ul className='menu-sx'>
          <li style={{color:"gray"}}> Dashboard <a href="#"></a> </li>
          <li style={{color:"gray"}}> Esami <a href="#"> </a></li>
        </ul>
      </div>

      <div className='header-dx'>
        <ul className='menu-dx'>
          <li style={{color:"DarkOrange"}}> Alessandro Molon <a href="#"> </a></li>
          <li style={{color:"DarkOrange"}}> Logout <a href="#"> </a></li>
        </ul>
      </div>
    </header>

    <section className='content'>
      <div className='card'>
        <img src={User} alt="Icona User" width={"60px"} style={{marginRight:"7px"}}/>
        <h2 style={{marginRight:"7px", fontWeight:"lighter"}}>Alessandro Molon </h2>
      </div>
    </section>

      {/* <PageTitle title= "Test di Matematica - Classe 1 A"/>

      <Description type="info">
        Oggi facciamo: Algebra
      </Description> */}
    </>
  )
}

export default App
