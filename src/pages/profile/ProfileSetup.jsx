import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import '../../styles/profile/ProfileSetup.css';

const ProfileSetup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    profile_picture: null,
    banner: null,
    location: '',
    website: '',
    bio: ''
  });
  const [loading, setLoading] = useState(false);
  const [errors, setErrors] = useState({});
  const [previewUrls, setPreviewUrls] = useState({
    profile_picture: null,
    banner: null
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleFileChange = (e) => {
    const { name, files } = e.target;
    if (files && files[0]) {
      setFormData(prev => ({ ...prev, [name]: files[0] }));
      
      // Create a preview URL
      const url = URL.createObjectURL(files[0]);
      setPreviewUrls(prev => ({ ...prev, [name]: url }));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setErrors({});

    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
      return;
    }

    // Create form data for file upload
    const formDataToSend = new FormData();
    for (const key in formData) {
      if (formData[key] !== null) {
        formDataToSend.append(key, formData[key]);
      }
    }

    try {
      await axios.put('http://localhost:8000/api/profile/', formDataToSend, {
        headers: {
          'Authorization': `Token ${token}`,
          'Content-Type': 'multipart/form-data'
        }
      });
      navigate('/profile');
    } catch (err) {
      console.error('Error updating profile:', err.response?.data);
      setErrors(err.response?.data || { general: 'Failed to update profile' });
    } finally {
      setLoading(false);
    }
  };

  const handleSkip = () => {
    navigate('/');
  };

  return (
    <div className="profile-setup-container">
      <div className="profile-setup-header">
        <h1>Set Up Your Profile</h1>
        <p>Customize your profile to help others find and connect with you</p>
      </div>

      <form onSubmit={handleSubmit} className="profile-setup-form">
        <div className="form-section">
          <h2>Profile Picture</h2>
          <div className="image-upload-container">
            <div 
              className="profile-picture-preview" 
              style={{ backgroundImage: previewUrls.profile_picture ? `url(${previewUrls.profile_picture})` : 'none' }}
            >
              {!previewUrls.profile_picture && <span>+</span>}
            </div>
            <input 
              type="file" 
              name="profile_picture" 
              id="profile_picture"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <label htmlFor="profile_picture" className="upload-button">Choose Image</label>
            {errors.profile_picture && <div className="error-message">{errors.profile_picture}</div>}
          </div>
        </div>

        <div className="form-section">
          <h2>Cover Banner</h2>
          <div className="image-upload-container banner-container">
            <div 
              className="banner-preview" 
              style={{ backgroundImage: previewUrls.banner ? `url(${previewUrls.banner})` : 'none' }}
            >
              {!previewUrls.banner && <span>Add a cover image</span>}
            </div>
            <input 
              type="file" 
              name="banner" 
              id="banner"
              accept="image/*"
              onChange={handleFileChange}
              className="file-input"
            />
            <label htmlFor="banner" className="upload-button">Choose Banner</label>
            {errors.banner && <div className="error-message">{errors.banner}</div>}
          </div>
        </div>

        <div className="form-section">
          <h2>About You</h2>
          <div className="form-group">
            <label htmlFor="bio">Bio</label>
            <textarea
              id="bio"
              name="bio"
              rows="4"
              placeholder="Write a short bio about yourself..."
              value={formData.bio}
              onChange={handleTextChange}
            ></textarea>
            {errors.bio && <div className="error-message">{errors.bio}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="location">Location</label>
            <input
              type="text"
              id="location"
              name="location"
              placeholder="City, Country"
              value={formData.location}
              onChange={handleTextChange}
            />
            {errors.location && <div className="error-message">{errors.location}</div>}
          </div>

          <div className="form-group">
            <label htmlFor="website">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              placeholder="https://yourwebsite.com"
              value={formData.website}
              onChange={handleTextChange}
            />
            {errors.website && <div className="error-message">{errors.website}</div>}
          </div>
        </div>

        {errors.general && <div className="general-error">{errors.general}</div>}

        <div className="form-actions">
          <button type="button" onClick={handleSkip} className="skip-button">Skip for now</button>
          <button type="submit" className="save-button" disabled={loading}>
            {loading ? 'Saving...' : 'Save Profile'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default ProfileSetup; 