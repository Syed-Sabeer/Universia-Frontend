import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'

const Login = () => {
  const [formData, setFormData] = useState({ username: '', password: '' });
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const [loading, setLoading] = useState(false);


  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading
    setError(''); // Clear any previous error
  
    try {
      const res = await axios.post('http://localhost:8000/api/login/', formData);
      localStorage.setItem('token', res.data.token);
      navigate('/');
    } catch (err) {
      console.error("Login error:", err.response?.data);
      setError(err.response?.data?.error || 'Invalid credentials. Please try again.');
    } finally {
      setLoading(false); // Stop loading
    }
  };
  
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
            {error && <p className="error-message">{error}</p>}
            <form className="login-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <label>Email or Username</label>
                <input
                  type="text"
                  name="username"
                  placeholder="Enter your email or username"
                  value={formData.username}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  name="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>
              <button type="submit" className="login-btn" disabled={loading}>
  {loading ? 'Signing In...' : 'Sign In'}
</button>

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
