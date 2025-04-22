import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import confetti from 'canvas-confetti';
import '../../styles/modals/RegistrationSuccess.css';

const RegistrationSuccess = ({ onClose, token }) => {
  const [currentStep, setCurrentStep] = useState(1); // 1: Welcome, 2: Profile Setup
  const navigate = useNavigate();

  // Confetti effect
  React.useEffect(() => {
    const duration = 3 * 1000;
    const animationEnd = Date.now() + duration;
    const defaults = { startVelocity: 30, spread: 360, ticks: 60, zIndex: 0 };

    function randomInRange(min, max) {
      return Math.random() * (max - min) + min;
    }

    const interval = setInterval(function() {
      const timeLeft = animationEnd - Date.now();

      if (timeLeft <= 0) {
        return clearInterval(interval);
      }

      const particleCount = 50 * (timeLeft / duration);
      // since particles fall down, start a bit higher than random
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.1, 0.3), y: Math.random() - 0.2 } 
      }));
      confetti(Object.assign({}, defaults, { 
        particleCount, 
        origin: { x: randomInRange(0.7, 0.9), y: Math.random() - 0.2 } 
      }));
    }, 250);

    return () => clearInterval(interval);
  }, []);

  const handleNextStep = () => {
    if (currentStep === 1) {
      setCurrentStep(2);
    } else {
      onClose();
      navigate('/profile-setup');
    }
  };

  const handleSkip = () => {
    localStorage.setItem('token', token);
    onClose();
    navigate('/');
  };

  return (
    <div className="registration-success-overlay">
      <div className="registration-success-modal">
        {currentStep === 1 ? (
          <>
            <div className="celebration-animation">
              <div className="firework"></div>
              <div className="firework"></div>
              <div className="firework"></div>
            </div>
            <h2>🎉 Welcome to Universia! 🎉</h2>
            <div className="vision-statement">
              <p>
                Welcome to a single universal platform where every university, professor, and student 
                in the world can connect, collaborate, and learn together — with localized tools, 
                global networking, and unified academic records.
              </p>
            </div>
            <button className="next-button" onClick={handleNextStep}>Next</button>
          </>
        ) : (
          <>
            <h2>Complete Your Profile</h2>
            <p>Take a moment to set up your profile to get the most out of Universia.</p>
            <div className="profile-options">
              <div className="profile-setup-preview">
                <div className="profile-icon">
                  <i className="fa fa-user-circle" aria-hidden="true"></i>
                </div>
                <ul>
                  <li>Add a profile picture</li>
                  <li>Set your cover banner</li>
                  <li>Complete your bio</li>
                  <li>Add your location</li>
                  <li>Link your website</li>
                </ul>
              </div>
            </div>
            <div className="button-group">
              <button className="skip-button" onClick={handleSkip}>Skip for now</button>
              <button className="setup-button" onClick={handleNextStep}>Set up profile</button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default RegistrationSuccess; 