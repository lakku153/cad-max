import React, { useState } from 'react';
import './Dashboard.css'; // Import CSS for styling
import companyLogo from './images/cadmax.png'; // Path to the company logo
import CustomerSelection from './components/CustomerSelection';
import NewCustomerForm from './components/NewCustomerForm';
import ConfirmationPopup from './components/ConfirmationPopup';
import WorkingTab from './components/WorkingTab';
// import FormComponent from './components/FormComponent';


const CustomerDashboard = () => {
  const [activeTab, setActiveTab] = useState('customer'); // State to track active tab
  const [showNewCustomerForm, setShowNewCustomerForm] = useState(false); // State to toggle new customer form
  const [selectedDepartment, setSelectedDepartment] = useState(''); // State to track the selected department

  const [showConfirmationPopup, setShowConfirmationPopup] = useState(false); // State for showing confirmation popup


  // State to store new customer form data
  const [customerData, setCustomerData] = useState({
    name: '',
    company: '',
    contact: '',
    address: ''
  });

  // Function to handle tab change
  const handleTabChange = (tab) => {
    setActiveTab(tab);
    setShowNewCustomerForm(false); // Ensure the new customer form is hidden when changing tabs
    setSelectedDepartment(''); // Reset department selection
  };

  // Toggle between customer selection and new customer form
  const toggleNewCustomerForm = () => {
    setShowNewCustomerForm(!showNewCustomerForm);
  };

  // Handle department selection for the "Working" tab
  const handleDepartmentChange = (event) => {
    setSelectedDepartment(event.target.value);
  };

  // Handle customer form input changes
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setCustomerData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Handle confirmation of the form submission
  const handleSubmit = () => {
    setShowConfirmationPopup(true); // Show confirmation popup
  };

  // Handle the action when user confirms the submission
  const handleConfirmSubmit = () => {
    setShowConfirmationPopup(false); // Close the confirmation popup
    alert('Customer submitted successfully!'); // You can replace this with actual form submission logic
  };

  // Handle the action when user cancels the submission
  const handleCancelSubmit = () => {
    setShowConfirmationPopup(false); // Close the confirmation popup
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
          <div className="profile-container">
            <span className="profile-name">Username</span>
            <span className="profile-emoji" role="img" aria-label="Profile">👤</span> {/* Emoji added */}
          </div>
        </header>

        {/* Conditionally Render Content based on activeTab */}
        <div className="content-container">
          {/* Customer Tab */}
          {activeTab === 'customer' && !showNewCustomerForm && (
            <CustomerSelection toggleNewCustomerForm={toggleNewCustomerForm} />

          )}

          {/* New Customer Form */}
          {showNewCustomerForm && (
            <NewCustomerForm
              customerData={customerData}
              handleInputChange={handleInputChange}
              handleSubmit={handleSubmit}
              toggleNewCustomerForm={toggleNewCustomerForm}
            />
          )}

          {/* Confirmation Popup */}
          {showConfirmationPopup && (
            <ConfirmationPopup
            customerData={customerData}
            handleConfirmSubmit={handleConfirmSubmit}
            handleCancelSubmit={handleCancelSubmit}
            />
          )}


          {/* Working Tab */}
          {activeTab === 'working' && (
            <WorkingTab
              selectedDepartment={selectedDepartment}
              handleDepartmentChange={handleDepartmentChange}
            />
          )}

          {/* <FormComponent selectedDepartment={selectedDepartment} /> */}

        </div>

      </div>


    </div>
  );
};

export default CustomerDashboard;
