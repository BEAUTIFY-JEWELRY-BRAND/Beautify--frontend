import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landing_page/LandingPage'
import { Signup } from './pages/signup/Signup'
import { Shop } from './pages/shop/Shop'
import { Login } from './pages/login/Login'
import { Inventory } from './pages/inventory/Inventory'

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className='app'>
      <Router>
        <Routes>
          <Route exact path='/' element={<LandingPage/>}/>
          <Route path='/signup' element={<Signup userStatus={setIsUserLoggedIn}/>}/>
          <Route path='/login' element={<Login userStatus={setIsUserLoggedIn}/>}/>
          <Route path='/shop' element={<Shop userStatus={isUserLoggedIn}/>}/>
          <Route path='/inventory' element={<Inventory userStatus={isUserLoggedIn}/>}/>
        </Routes>
      </Router>
    </div>
  )
}

export default App
