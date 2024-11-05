import React from 'react';
import './Dashboard.css';  // Import your dashboard-specific CSS
import companyLogo from './images/cadmax.png'; // Path to the logo image

const Dashboard = () => {
  return (
    <div className="dashboard-container">
      {/* Company Logo in the top-left corner */}
      <img src={companyLogo} alt="Company Logo" className="company-logo" />

      {/* Buttons under the company logo */}
      <div className="button-container">
        <button className="dashboard-btn">Customer</button>
        <button className="dashboard-btn">Working</button>
        <button className="dashboard-btn">Attendance</button>
      </div>

     
    </div>
  );
};

export default Dashboard;
