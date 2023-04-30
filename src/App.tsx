import React, { useState } from 'react'
import { Routes, Route } from 'react-router-dom'

import Nav from './nav.tsx'
import './App.css'

import Home from './home/home.tsx'
import Projects from './projects/project.tsx'
import Contact from './contact/contact.tsx'
import Misc from './misc/Misc.tsx'

function App(): JSX.Element {

  return (
    <>
      <Nav />
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
