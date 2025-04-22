import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import RegistrationSuccess from '../../components/modals/RegistrationSuccess'

const Register = () => {
  const [formData, setFormData] = useState({
    first_name: '',
    last_name: '',
    username: '',
    email: '',
    password: '',
    gender: '',
    academic_status: '',
    date_of_birth: ''
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const [registrationToken, setRegistrationToken] = useState('');
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleDateChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      date_of_birth: {
        ...prev.date_of_birth,
        [name]: value
      }
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true); // Start loading

    // Fix the date formatting
    const { day, month, year } = formData.date_of_birth || {};
    let dob = '';
    if (year && month && day) {
      const monthStr = String(month).padStart(2, '0');
      const dayStr = String(day).padStart(2, '0');
      dob = `${year}-${monthStr}-${dayStr}`;
    }

    const payload = {
      username: formData.username,
      first_name: formData.first_name,
      last_name: formData.last_name,
      email: formData.email,
      password: formData.password,
      gender: formData.gender,
      academic_status: formData.academic_status,
      date_of_birth: dob
    };
    console.log("Submitting payload:", payload);

    try {
      const response = await axios.post('http://localhost:8000/api/register/', payload);
      console.log("Registration successful:", response.data);
      setRegistrationToken(response.data.token);
      setShowSuccessModal(true);
    } catch (err) {
      console.error("Registration error:", err.response?.data);
      
      // Format error messages more user-friendly
      if (err.response?.data) {
        const errorData = err.response.data;
        let errorMessage = '';
        
        // Handle password errors specifically
        if (errorData.password) {
          errorMessage += "Password issues: " + errorData.password.join(", ");
        } else {
          // Handle other field errors
          Object.keys(errorData).forEach(key => {
            errorMessage += `${key}: ${errorData[key].join(", ")}\n`;
          });
        }
        
        setError(errorMessage || "An error occurred during registration");
      } else {
        setError('Something went wrong. Please try again.');
      }
    } finally {
      setLoading(false); // Stop loading
    }
  };

  const handleCloseSuccessModal = () => {
    setShowSuccessModal(false);
  };

  // If success modal is shown, render only that
  if (showSuccessModal) {
    return <RegistrationSuccess onClose={handleCloseSuccessModal} token={registrationToken} />;
  }

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
            {error && (
              <div className="error-message" style={{
                backgroundColor: '#ffebee',
                color: '#d32f2f',
                padding: '10px',
                borderRadius: '4px',
                marginBottom: '15px',
                whiteSpace: 'pre-line'
              }}>
                {error}
              </div>
            )}
            <form className="register-form" onSubmit={handleSubmit}>
              <div className="form-row">
                <div className="form-group">
                  <label>First Name</label>
                  <input type="text" name="first_name" placeholder="Enter your first name" onChange={handleChange} required />
                </div>
                <div className="form-group">
                  <label>Last Name</label>
                  <input type="text" name="last_name" placeholder="Enter your last name" onChange={handleChange} required />
                </div>
              </div>

              <div className="form-group">
                <label>Email Address</label>
                <input type="email" name="email" placeholder="Enter your email address" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Username</label>
                <input type="text" name="username" placeholder="Choose a username" onChange={handleChange} required />
              </div>

              <div className="form-group">
                <label>Password</label>
                <input type="password" name="password" placeholder="Create a strong password" onChange={handleChange} required />
                <small className="password-hints" style={{
                  color: '#666',
                  fontSize: '0.8rem',
                  display: 'block',
                  marginTop: '5px'
                }}>
                  Password must be at least 8 characters, include letters and numbers, 
                  and shouldn't be too common
                </small>
              </div>

              <div className="form-section">
                <label className="section-label">Date of Birth</label>
                <div className="date-selects">
                  <div className="select-container">
                    <select name="day" onChange={handleDateChange}>
                      <option value="">Day</option>
                      {[...Array(31)].map((_, i) => (
                        <option key={i+1} value={i+1}>{i+1}</option>
                      ))}
                    </select>
                  </div>
                  <div className="select-container">
                    <select name="month" onChange={handleDateChange}>
                      <option value="">Month</option>
                      {[...Array(12)].map((_, i) => (
                        <option key={i+1} value={i+1}>{new Date(0, i).toLocaleString('default', { month: 'long' })}</option>
                      ))}
                    </select>
                  </div>
                  <div className="select-container">
                    <select name="year" onChange={handleDateChange}>
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
                  {['female', 'male', 'custom'].map(g => (
                    <label key={g} className="radio-container">
                      <input type="radio" name="gender" value={g} onChange={handleChange} />
                      <span className="radio-label">{g.charAt(0).toUpperCase() + g.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="form-section">
                <label className="section-label">Academic Status</label>
                <div className="radio-group academic-status">
                  {['student', 'faculty', 'researcher', 'other'].map(s => (
                    <label key={s} className="radio-container">
                      <input type="radio" name="academic_status" value={s} onChange={handleChange} />
                      <span className="radio-label">{s.charAt(0).toUpperCase() + s.slice(1)}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="terms-container">
                <label className="checkbox-container">
                  <input type="checkbox" required />
                  <span className="checkmark"></span>
                  <span className="terms-text">
                    I agree to the <Link to="#">Terms of Service</Link> and <Link to="#">Privacy Policy</Link>
                  </span>
                </label>
              </div>

              <button type="submit" className="register-btn" disabled={loading}>
                {loading ? 'Registering...' : 'Create Account'}
              </button>

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
