import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS for styling
import companyLogo from './images/cadmax.png'; // Path to the company logo

const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('customer'); // State to track active tab
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false); // State to toggle new customer form
  const [selectedDepartment, setSelectedDepartment] = useState(''); // State to track the selected department

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowNewCustomerForm(false); // Ensure the new customer form is hidden when changing tabs
  };

  // Toggle between customer selection and new customer form
  const toggleNewCustomerForm = () => {
    setShowNewCustomerForm(!showNewCustomerForm);
  };

  // Handle department selection for the "Working" tab
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  return (
    <div className="dashboard-layout">
      {/* Sidebar */}
      <div className="sidebar">
        <div className="logo-container">
          <img src={companyLogo} alt="Company Logo" className="company-logo" />
        </div>
        <nav className="nav-links">
          <a
            href="#customer"
            className={`nav-link ${activeTab === 'customer' ? 'active' : ''}`}
            onClick={() => handleTabChange('customer')}
          >
            Customer
          </a>
          <a
            href="#working"
            className={`nav-link ${activeTab === 'working' ? 'active' : ''}`}
            onClick={() => handleTabChange('working')}
          >
            Working
          </a>
          <a
            href="#attendance"
            className={`nav-link ${activeTab === 'attendance' ? 'active' : ''}`}
            onClick={() => handleTabChange('attendance')}
          >
            Attendance
          </a>
        </nav>
      </div>

      {/* Main Content */}
      <div className="main-content">
        <header className="header">
          <h1 className="company-title">CadMax Projects Pvt. Ltd.</h1>
        </header>

        {/* Conditionally Render Content based on activeTab */}
        <div className="content-container">
          {/* Customer Tab */}
          {activeTab === 'customer' && !showNewCustomerForm && (
            <div className="customer-box">
              <label htmlFor="existing-customer" className="select-label">
                Select Existing Customer
              </label>
              <select id="existing-customer" className="select-customer">
                <option>Search...</option>
                <option>Customer A</option>
                <option>Customer B</option>
                <option>Customer C</option>
                <option>Customer D</option>
                <option>Customer E</option>
              </select>
              <div className="or-divider">
                <span>or</span>
              </div>
              <button className="add-customer-btn" onClick={toggleNewCustomerForm}>
                Add a new customer
              </button>
            </div>
          )}

          {/* New Customer Form */}
          {showNewCustomerForm && (
            <div className="new-customer-form">
              <h3>Register New Customer</h3>
              <div className="form-group">
                <label>Name</label>
                <input type="text" className="form-input" placeholder="Enter Name" />
              </div>
              <div className="form-group">
                <label>Company</label>
                <input type="text" className="form-input" placeholder="Enter Company" />
              </div>
              <div className="form-group">
                <label>Contact Number</label>
                <input type="text" className="form-input" placeholder="Enter Contact Number" />
              </div>
              <div className="form-group">
                <label>Address</label>
                <input type="text" className="form-input" placeholder="Enter Address" />
              </div>
              <button className="submit-btn">Submit</button>
              <button className="back-btn" onClick={toggleNewCustomerForm}>
                Back to Customer Selection
              </button>
            </div>
          )}

          {/* Working Tab */}
          {activeTab === 'working' && (
            <div className="working-box">
              
              <div className="working-content">
                <label htmlFor="select-department" className="select-label">
                  Choose Department:
                </label>
                <select
                  id="select-department"
                  className="select-department"
                  value={selectedDepartment}
                  onChange={handleDepartmentChange}
                >
                  <option value="">Select Department...</option>
                  <option value="Survey Department">Survey Department</option>
                  <option value="Architecture Department">Architecture Department</option>
                  <option value="Urban Planning Department">Urban Planning Department</option>
                  <option value="Engineering Drawing Department">Engineering Drawing Department</option>
                  <option value=">JDA Submission">JDA Submission</option>
                  <option value="GIS">GIS</option>
                  <option value="Site Plan">Site Plan</option>
                  <option value="Area Conversion">Area Conversion</option>
                  <option value="Sector SuperImpose">Sector SuperImpose</option>
                  <option value="Print">Print</option>
                </select>
                {selectedDepartment && (
                  <div className="department-details">
                    <p>
                      <strong>Selected Department:</strong> {selectedDepartment}
                    </p>
                    <p>Additional information or actions related to {selectedDepartment} can be displayed here.</p>
                  </div>
                )}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Profile Logo and Text at the Top Right */}
      <div className="top-right">
        <span className="profile-text">Someone</span>
        <div className="profile-logo">
          <span>👤</span> {/* Using the emoji directly */}
        </div>
      </div>
    </div>
  );
};

export default CustomerDashboard;
