import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // Use useNavigate instead of useHistory

// Simulating static customer data
const customers = [
  { name: 'Customer A', company: 'Company A', contact: '123-456-7890' },
  { name: 'Customer B', company: 'Company B', contact: '987-654-3210' },
  { name: 'Customer C', company: 'Company C', contact: '555-555-5555' },
];

const CustomerSelection = ({toggleNewCustomerForm}) => {
  const [selectedCustomer, setSelectedCustomer] = useState('');
  const navigate = useNavigate(); // useNavigate replaces useHistory

  // Handle customer selection
  const handleCustomerChange = (event) => {
    const customerName = event.target.value;
    setSelectedCustomer(customerName);

    if (customerName !== 'Search...') {
      // Redirect to the customer details page
      navigate(`/customer/${customerName}`); // Use navigate instead of history.push
    }
  };

  return (
    <div className="customer-box">
      <label htmlFor="existing-customer" className="select-label">
        Select Existing Customer
      </label>
      <select
        id="existing-customer"
        className="select-customer"
        value={selectedCustomer}
        onChange={handleCustomerChange}
      >
        <option>Search...</option>
        {customers.map((customer) => (
          <option key={customer.name} value={customer.name}>
            {customer.name}
          </option>
        ))}
      </select>
      <div className="or-divider">
        <span>or</span>
      </div>
      <button className="add-customer-btn" onClick={toggleNewCustomerForm}>
        Add a new customer
      </button>
    </div>
  );
};

export default CustomerSelection;
