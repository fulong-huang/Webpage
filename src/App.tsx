import { useState } from 'react'


import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

import Home from './home/Home.tsx'
import Projects from './projects/project.tsx'

function App() {

  return (
    <>
      <nav>
        {/* <div className='nav-icon-container'>  */}
          <input type='checkbox' id='nav-toggle'></input>
          <label htmlFor='nav-toggle' className='check-btn'>
            <img src='/src/assets/navigation-bar.png' className='nav-icon'></img>
          </label>

        <ul>
          <li>
            <Link to='/' className='nav-link active'> Home </Link>
          </li>
          <li>
            <Link to='/projects' className='nav-link active'> Projects </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
      </Routes>
    </>
  )
}

export default App
