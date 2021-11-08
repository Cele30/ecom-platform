import React from 'react'
import Dashboard from './pages/Dashboard'
import Shop from './pages/Shop'
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <Routes>
      <Route path='/' element={<Dashboard />} />
      <Route path='/shop' element={<Shop />} />
    </Routes>
  )
}

export default App
