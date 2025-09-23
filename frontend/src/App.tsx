import { useState } from 'react'
import Logo from './assets/ExGame logo.svg';
import './App.css'

function App() {

  

  return (
    <>
      <header className="header">
        <div className="header-left">
        <img src={Logo} className='Logo'></img>

        <nav className="nav-sinistra">
          <ul>
            <button className="pulsante"> Primo Pulsante</button>
            <button className="pulsante"> Secondo Pulsante</button>
          </ul>
        </nav>
        </div>
        <div className='header-right'>
        <nav className="nav-destra">
          <ul>
            <button className="pulsante-sec">Terzo pulsante</button>
            <button className="pulsante-sec">Quarto pulsante</button>
          </ul>
        </nav>
        </div>
      </header>
      
      <section className='MainSection'>
        <section className='PrimaSection'>
          <h1>Main Title</h1>
          <p> paragrafo</p>
        </section>
        <section className='SecondSection'>
          <h1>Main Title</h1>
          <p> paragrafo</p>
        </section>
        <section className='SecondSection'>
          <h1>Main Title</h1>
          <p> paragrafo</p>
        </section>
        <section className='SecondSection'>
          <h1>Main Title</h1>
          <p> paragrafo</p>
        </section>
        
      </section>
    </>
  );
}

export default App
