import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom'
import './App.css'
import { LandingPage } from './pages/landing_page/LandingPage'
import { Signup } from './pages/signup/Signup'
import { Home } from './pages/home/Home'
import { Login } from './pages/login/Login'
import { Inventory } from './pages/inventory/Inventory'
import { Item } from './pages/inventory/item/Item'

function App() {
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);

  return (
    <div className='app'>
      <Router>
        <Routes>
          {/* <Route exact path='/' element={<LandingPage/>}/> */}
          <Route exact path='/' element={<Inventory/>}/>
          <Route path='/signup' element={<Signup userStatus={setIsUserLoggedIn}/>}/>
          <Route path='/login' element={<Login userStatus={setIsUserLoggedIn}/>}/>
          {/* <Route path='/home' element={<Home userStatus={isUserLoggedIn}/>}/> */}
          <Route path={`/item/:id`} element={<Item />} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
