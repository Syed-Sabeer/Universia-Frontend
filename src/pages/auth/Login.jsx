import React from 'react'
import { Link } from 'react-router-dom'

const Login = () => {
  return (
    <div className="login-container">
      <div className="login-wrapper">
        <div className="login-left">
          <h1 className="brand-name">Universia</h1>
          <p className="brand-tagline">
            A single universal platform where every university, professor, and student in the world can connect, collaborate, and learn together — with localized tools, global networking, and unified academic records.
          </p>
        </div>
        <div className="login-right">
          <div className="login-form-container">
            <h2 className="welcome-text">Welcome Back</h2>
            <form className="login-form">
              <div className="form-group">
                <label>Email or Phone</label>
                <input type="text" placeholder="Enter your email or phone" />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Enter your password" />
              </div>
              <button type="submit" className="login-btn">Sign In</button>
              <div className="forgot-password">
                <Link to="/forgot-password">Forgot your password?</Link>
              </div>
            </form>
            <div className="signup-section">
              <p>Don't have an account?</p>
              <Link to="/register" className="create-account-btn">Create Account</Link>
            </div>
            <div className="create-page">
              <p><Link to="#">Create a University Page</Link> or organization profile</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login