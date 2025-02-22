import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      <Routes>
      <Route path='/' element={<Dashboard />} />
      </Routes>
    </div>
  )
}

export default App