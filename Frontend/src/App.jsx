import React from 'react'
import Navbar from './components/Navbar'
import { Route, Routes } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import GeneralDashboard from './pages/GeneralDashboard'

const App = () => {
  return (
    <div className=''>
      <Navbar/>
      
      {<GeneralDashboard />}
      {/* <Route path='/dashboard' element={<Dashboard />} /> */}
      <Dashboard/>
    </div>
  )
}

export default App