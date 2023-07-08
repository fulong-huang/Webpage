// import React, { useState } from 'react'
import { Routes, Route, Navigate } from 'react-router-dom'

import Nav from './nav.tsx'
import './App.css'

import Home from './home/home.tsx'
import Projects from './projects/project.tsx'
import Contact from './contact/contact.tsx'
import Misc from './misc/misc.tsx'
import Process from './projects/process/processNresource.tsx'
import { Analytics } from '@vercel/analytics/react'

function App(): JSX.Element {

  return (
    <>
      <Nav />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/projects'>
          <Route index element={<Projects />} />
          <Route path='process' element={<Process />} />
        </Route>
        <Route path='/contact' element={<Contact />} />
        <Route path='/misc' element={<Misc />} />
        <Route path='*' element= {<Navigate to='/projects' />} />
      </Routes>
      <Analytics />
    </>
  )
}

export default App
