//import { useState } from 'react'
import './App.css'
import Logo from './assets/ExGame logo.svg'
import UserLogo from './assets/149071.png'

function App() {

  return (
    <>
      <div className='navbar flex flex-row gap-5 justify-between items-center p-6'>
        <div className='flex flex-row gap-5 items-center'>
          <img className="w-40" src={Logo} alt="" />
          <a href="">Dashboard</a> 
          <a href="">Esami</a>
        </div>
        <div className='flex flex-row gap-5 items-center'>
          <a href="">nome</a>
          <a href="">Logout</a>
        </div>
      </div>
      <div className='flex justify-center p-6 flex-col gap-4'>
        <div className='flex flex-row border-1 border-orange-300 rounded-lg h-20 w-[75%] items-center gap-5 p-4'>
          <img className="w-10 h-10" src={UserLogo} alt="" />
          <p className='text-gray-700 font-bold text-xl'>Nome Cognome</p>
        </div>
        <p className='font-bold text-4xl text-black'>Test di Matematica - Classe 1A</p>
      </div>
    </>
  )
}

export default App
