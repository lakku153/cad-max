import React, { useState } from 'react';
import '../Dashboard.css';
import { useNavigate } from 'react-router-dom'; // Import useNavigate for navigation

function ProfileDropdown() {
  const [isDropdownVisible, setDropdownVisible] = useState(false);
  const navigate = useNavigate(); // Hook to navigate between pages

  // Handle profile icon click to toggle the dropdown visibility
  const handleProfileClick = () => {
    setDropdownVisible(!isDropdownVisible);
  };

  // Handle redirect to the profile page
  const handleProfileRedirect = () => {
    navigate('/profile'); // Navigate to the Profile Page
  };

   // Handle logout by clearing session data and redirecting to Sign-In page
   const handleLogout = () => {
    // Clear any session data (for example, JWT token) if you have it
    localStorage.removeItem('authToken'); // Example for token removal, you can adjust based on your app's logic
    
    // Redirect to Sign-In page
    navigate('/');
  };


  return (
    <div className="profile-container">
      <div className="profile-icon" onClick={handleProfileClick}>
        <span role="img" aria-label="Profile" className="profile-emoji">👤</span>
      </div>

     

      {isDropdownVisible && (
        <div className="profile-dropdown">
          {/* <p><strong>Username:</strong> johndoe</p>
          <p><strong>Job Role:</strong> Software Developer</p> */}
          <button className="profile-btn" onClick={handleProfileRedirect}>Profile</button>
          <button className="logout-btn" onClick={handleLogout}>Log Out</button>
        </div>
      )}
    </div>
  );
}

export default ProfileDropdown;
