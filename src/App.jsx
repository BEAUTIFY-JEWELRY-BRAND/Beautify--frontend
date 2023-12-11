import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landing_page/LandingPage'
import { Signup } from './pages/signup/Signup'
import { Shop } from './pages/shop/Shop'

function App() {

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<Signup/>}/>
          <Route path='/shop' element={<Shop/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
