import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/layout/Header'
import Feed from './pages/social/Feed'
import {BrowserRouter, Routes, Route} from 'react-router-dom'

// Import CSS files
import './styles.js'

const App = () => {

  return (
    <div class="theme-layout">
      
    <BrowserRouter>
    {/* <Header/> */}
    <Routes>
      <Route path="/" element={<Feed/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/register" element={<Register/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  )
}


export default App