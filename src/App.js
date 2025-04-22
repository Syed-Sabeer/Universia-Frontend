import React from 'react'
import Login from './pages/auth/Login'
import Register from './pages/auth/Register'
import Header from './components/layout/Header'
import Feed from './pages/social/Feed'
import Profile from './pages/profile/Profile.jsx'
import ProfileSetup from './pages/profile/ProfileSetup'
import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom'

// Import CSS files
import './styles.js'

const App = () => {
  return (
    <div className="theme-layout">
      <BrowserRouter>
        <ConditionalHeader />
        <Routes>
          <Route path="/" element={<Feed />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/profile-setup" element={<ProfileSetup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

// 👇 Component to conditionally show Header
const ConditionalHeader = () => {
  const location = useLocation()
  const hideHeaderPaths = ['/login', '/register']
  const shouldHideHeader = hideHeaderPaths.includes(location.pathname)

  return !shouldHideHeader ? <Header /> : null
}

export default App
