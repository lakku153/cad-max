import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './SignIn.css';  // Import the external CSS file

// Import the company logo
import companyLogo from './images/cadmax.png';
// Import local logo images
import githubLogo from './images/github.jfif';
import facebookLogo from './images/facebook.jfif';
import googleLogo from './images/google.jfif';
import appleLogo from './images/apple.jfif';

// You can use an SVG or a font-based icon like FontAwesome for the down arrow
import { FaCaretDown } from 'react-icons/fa';  // Using react-icons for the down arrow icon

const SignIn = () => {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
  const [showFields, setShowFields] = useState(false); // Track visibility of name and password fields for Cadmax Login
  const [showOrgField, setShowOrgField] = useState(false); // Track visibility of the name field for Organization Login
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting and reloading the page

    // Handle the sign-in logic (mock here)
    navigate('/dashboard');  // Redirect to the dashboard after successful sign-in
  };

  return (
    <div className="sign-in-container">
      {/* Company Logo in the top-right corner of the sign-in box */}
      <div className="sign-in-box">
        <img src={companyLogo} alt="Company Logo" className="company-logo" /> {/* Logo inside the sign-in box */}

        <div className="sign-in-form">
          <h2>Sign In</h2>

          {/* Cadmax Login Dropdown Button */}
          <div className="dropdown-btn" onClick={() => setShowFields(!showFields)}>
            <span>Cadmax Login</span>
            <FaCaretDown />
          </div>

          {showFields && !showOrgField && (
            <form onSubmit={handleSubmit}>
              <div>
                <label>Name:</label>
                <input
                  className="input-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label>Password:</label>
                <input
                  className="input-field"
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  required
                />
              </div>
              <div className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label> Keep me signed in</label>
              </div>
              <br />
              <button className="submit-btn" type="submit">Sign In</button>
            </form>
          )}

          {/* Organization Login Dropdown Button */}
          <div className="dropdown-btn" onClick={() => setShowOrgField(!showOrgField)}>
            <span>Organization URL</span>
            <FaCaretDown />
          </div>

          {showOrgField && (
            <>
              <div>
                <label>Link:</label>
                <input
                  className="input-field"
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Organization URL"
                  required
                />
              </div>
              <div className="checkbox-label-org">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label> Remember this URL</label>
              </div>
              <br />
              <button className="submit-btn" type="submit">Continue</button>
            </>
          )}

          {/* Horizontal Line between Organization URL and Logos */}
          <hr className="org-logos-divider" />

          {/* Logos Section */}
          <div className="logos-container">
            <img
              src={githubLogo}
              alt="GitHub"
              className="logo"
              onClick={() => window.location.href = 'https://github.com'}
            />
            <div className="logo-divider"></div>
            <img
              src={facebookLogo}
              alt="Facebook"
              className="logo"
              onClick={() => window.location.href = 'https://facebook.com'}
            />
            <div className="logo-divider"></div>
            <img
              src={googleLogo}
              alt="Google"
              className="logo"
              onClick={() => window.location.href = 'https://google.com'}
            />
            <div className="logo-divider"></div>
            <img
              src={appleLogo}
              alt="Apple"
              className="logo"
              onClick={() => window.location.href = 'https://apple.com'}
            />
          </div>

          {/* No account text with link */}
          <div className="no-account-text">
            No account? <a href="http://cadmaxpro.com/index.html" target="_blank" rel="noopener noreferrer">Create an account</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
