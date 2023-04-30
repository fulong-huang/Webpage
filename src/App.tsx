import React, { useState } from 'react'


import './App.css'
import { Link, Routes, Route } from 'react-router-dom'

import Home from './home/home.tsx'
import Projects from './projects/project.tsx'
import Contact from './contact/contact.tsx'
import Misc from './misc/Misc.tsx'

function App(): JSX.Element {

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
          <li>
            <Link to='/contact' className='nav-link active'> Contact </Link>
          </li>
          <li>
            <Link to='/misc' className='nav-link active'> MISC </Link>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects' element={<Projects />} />
        <Route path='/contact' element={<Contact />} />
        <Route path='/misc' element={<Misc />} />
      </Routes>
    </>
  )
}

export default App
