import React from 'react'
import Home from '../pages/Home'
import Docs from '../pages/Docs'
import { Routes, Route } from 'react-router-dom'


function App() {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/docs" element={<Docs/>}/>
    </Routes>
  )
}

export default App