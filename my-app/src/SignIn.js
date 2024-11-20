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
  const [username, setUsername] = useState('');  // Renamed to 'username' for clarity
  const [password, setPassword] = useState('');
  const [Accusername, setAccUsername] = useState('');  // Renamed to 'Accusername' for clarity
  const [Accpassword, setAccPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(false); // State for the checkbox
  const [organizationUrl, setOrganizationUrl] = useState(''); // State for Organization URL
  const [showFields, setShowFields] = useState(false); // Track visibility of name and password fields for Cadmax Login
  const [showOrgField, setShowOrgField] = useState(false); // Track visibility of the name field for Organization Login
  const [showAccField, setShowAccField] = useState(false); // Track visibility of the name field for Organization Login
  const navigate = useNavigate(); // Initialize the navigate function

  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent form from submitting and reloading the page

    // Handle the sign-in logic (mock here)
    navigate('/dashboard');  // Redirect to the dashboard after successful sign-in
  };

  const handleOrgSubmit = (e) => {
    e.preventDefault(); // Handle organization URL form submission
    // Add the organization URL login logic if needed
    navigate('/dashboard');  // Redirect to dashboard or another page after successful organization URL login
  };
  const handleAccSubmit = (e) => {
    e.preventDefault(); // Handle Account URL form submission
   
    navigate('/AccDashboard');  // Redirect to dashboard or another page after successful Account URL login
  };

  const handleCadmaxClick = () => {
    if (showFields) {
      setShowFields(false); // Hide Cadmax login form if it's already open
    } else {
      setShowFields(true);
      setShowAccField(false);
      setShowOrgField(false); // Hide Organization URL form
    }
  };

  const handleOrgClick = () => {
    if (showOrgField) {
      setShowOrgField(false); // Hide Organization URL form if it's already open
    } else {
      setShowOrgField(true);
      setShowAccField(false);
      setShowFields(false); // Hide Cadmax login form
    }
  };
  const handleAccClick = () => {
    if (showAccField) {
      setShowAccField(false); // Hide Organization URL form if it's already open
    } else {
      setShowAccField(true);
      setShowOrgField(false);
      setShowFields(false); // Hide Cadmax login form
    }
  };

  return (
    <div className="sign-in-container">
      {/* Company Logo in the top-right corner of the sign-in box */}
      <div className="sign-in-box">
        <img src={companyLogo} alt="Company Logo" className="company-logo" /> {/* Logo inside the sign-in box */}

        <div className="sign-in-form">
          <h2>Sign In</h2>

          {/* Cadmax Login Dropdown Button */}
          <div className="dropdown-btn" onClick={handleCadmaxClick}>
            <span>Cadmax Login</span>
            <FaCaretDown />
          </div>

          {showFields && !showOrgField && !showAccField &&(
            <form onSubmit={handleSubmit}>
              <div>
                <label htmlFor="username">Name:</label>
                <input
                  id="username"
                  className="input-field"
                  type="text"
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label htmlFor="password">Password:</label>
                <input
                  id="password"
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
              <button className="submit-btn" type="submit">Sign In</button>
            </form>
          )}

          {/* Organization Login Dropdown Button */}
          <div className="dropdown-btn" onClick={handleOrgClick}>
            <span>Organization URL</span>
            <FaCaretDown />
          </div>
          

          {showOrgField && !showAccField && !showFields &&(
            <form onSubmit={handleOrgSubmit}>
              <div>
                <label htmlFor="org-url">Link:</label>
                <input
                  id="org-url"
                  className="input-field"
                  type="text"
                  value={organizationUrl}
                  onChange={(e) => setOrganizationUrl(e.target.value)}
                  placeholder="Enter Organization URL"
                  required
                />
              </div>
              <div className="checkbox-label">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                />
                <label> Remember this URL</label>
              </div>
              <button className="submit-btn" type="submit">Continue</button>
            </form>
          )}

          {/* Cadmax Login Dropdown Button */}
          <div className="dropdown-btn" onClick={handleAccClick}>
            <span>Cadmax Accounts Login</span>
            <FaCaretDown />
          </div>

          {showAccField && !showFields && !showOrgField && (
            <form onSubmit={handleAccSubmit}>
              <div>
                <label htmlFor="Accusername">Name:</label>
                <input
                  id="Accusername"
                  className="input-field"
                  type="text"
                  value={Accusername}
                  onChange={(e) => setAccUsername(e.target.value)}
                  placeholder="Enter your username"
                  required
                />
              </div>
              <div>
                <label htmlFor="Accpassword">Password:</label>
                <input
                  id="Accpassword"
                  className="input-field"
                  type="password"
                  value={Accpassword}
                  onChange={(e) => setAccPassword(e.target.value)}
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
              <button className="submit-btn" type="submit">Sign In</button>
            </form>
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
