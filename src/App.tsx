import { useState } from 'react'


import './App.css'
import { Routes, Route } from 'react-router-dom'

import Tetris from './tetris/Tetris.tsx'

function App() {

  return (
    <>
        <Routes>
          <Route path='/tetris' element={<Tetris />} />
        </Routes>
    </>
  )
}

export default App
