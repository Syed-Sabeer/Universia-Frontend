import React from 'react'
import { Link } from 'react-router-dom'

const Register = () => {
  return (
    <div className="register-container">
      <div className="register-wrapper">
        <div className="register-left">
          <h1 className="brand-name">Universia</h1>
          <p className="brand-tagline">Join our global academic community</p>
        </div>
        
        <div className="register-right">
          <div className="register-form-container">
            <h2 className="welcome-text">Create Your Account</h2>
            <form className="register-form">
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" placeholder="Enter your first name" />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" placeholder="Enter your last name" />
                </div>
              </div>
              
              <div className="form-group">
                <label>Email Address</label>
                <input type="email" placeholder="Enter your email address" />
              </div>
              
              <div className="form-group">
                <label>Password</label>
                <input type="password" placeholder="Create a strong password" />
              </div>
              
              <div className="form-section">
                <label className="section-label">Date of Birth</label>
                <div className="date-selects">
                  <div className="select-container">
                    <select name="day">
                      <option value="">Day</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="select-container">
                    <select name="month">
                      <option value="">Month</option>
                      <option value="1">January</option>
                      <option value="2">February</option>
                      <option value="3">March</option>
                      <option value="4">April</option>
                      <option value="5">May</option>
                      <option value="6">June</option>
                      <option value="7">July</option>
                      <option value="8">August</option>
                      <option value="9">September</option>
                      <option value="10">October</option>
                      <option value="11">November</option>
                      <option value="12">December</option>
                    </select>
                  </div>
                  <div className="select-container">
                    <select name="year">
                      <option value="">Year</option>
                      {[...Array(80)].map((_, i) => (
                        <option key={2024-i} value={2024-i}>{2024-i}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
              
              <div className="form-section">
                <label className="section-label">Gender</label>
                <div className="radio-group">
                  <label className="radio-container">
                    <input type="radio" name="gender" value="female" />
                    <span className="radio-label">Female</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="gender" value="male" />
                    <span className="radio-label">Male</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="gender" value="custom" />
                    <span className="radio-label">Custom</span>
                  </label>
                </div>
              </div>
              
              <div className="form-section">
                <label className="section-label">Academic Status</label>
                <div className="radio-group academic-status">
                  <label className="radio-container">
                    <input type="radio" name="status" value="student" />
                    <span className="radio-label">Student</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="status" value="faculty" />
                    <span className="radio-label">Faculty</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="status" value="researcher" />
                    <span className="radio-label">Researcher</span>
                  </label>
                  <label className="radio-container">
                    <input type="radio" name="status" value="other" />
                    <span className="radio-label">Other</span>
                  </label>
                </div>
              </div>
              
              <div className="terms-container">
                <label className="checkbox-container">
                  <input type="checkbox" name="terms" />
                  <span className="checkmark"></span>
                  <span className="terms-text">
                    I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
                  </span>
                </label>
              </div>
              
              <button type="submit" className="register-btn">Create Account</button>
              
              <div className="login-section">
                <p>Already have an account?</p>
                <Link to="/login" className="login-account-btn">Sign In</Link>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register