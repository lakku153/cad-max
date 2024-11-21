import React,{useState} from 'react';
import { useParams } from 'react-router-dom';
import './CustomerDetailsPage.css'
import CustomerDetailDropdown from './CustomerDetailDropdown'; // Import the WorkingDataDropdowns component


// Simulating static customer data
const customers = [
    { name: 'Customer A', company: 'Company A', contact: '123-456-7890' },
    { name: 'Customer B', company: 'Company B', contact: '987-654-3210' },
    { name: 'Customer C', company: 'Company C', contact: '555-555-5555' },
];

const CustomerDetailsPage = () => {
    // Extract the 'name' parameter from the URL
    const { name } = useParams();

    // Find the customer from the static data using the name from the URL
    const customer = customers.find((customer) => customer.name === name);

    const [selectedOption, setSelectedOption] = useState('');
        
    // Handle dropdown change event
    const handleDropdownChange = (e) => {
        setSelectedOption(e.target.value);
    };
    
    // If no customer is found, display a message
    if (!customer) {
        return <p>Customer not found.</p>;
    }
    // Display customer details
    return (
        

        <div className="CustomerDetails-page">
            <div className="CustomerDetails-header">
                <div className="CustomerDetails-info">
                    <div className="username-container">
                        <h2 className="username">{customer.name}</h2>
                        <p className="status">{customer.company}</p>
                        <p className="status">{customer.contact}</p>
                    </div>
                </div>
            </div>

            {/* Container for last 7 days working data
            {/* <WorkingDataDropdowns /> */}
            {/* Dropdown in the center of the page */}
            {/* <div className="dropdown-container">
                <h3>Select a DateTime:</h3>
                <select
                    className="dropdown"
                    value={selectedOption}
                    onChange={handleDropdownChange}
                >
                    <option value="">Select Option</option>
                    <option value="Department">Department</option>
                    <option value="Cost">Cost</option>
                    <option value="Working">Working</option>
                    <option value="Staff">Staff</option>
                    <option value="Area">Area</option>
                </select>
                <button className="Add-task">Add task</button>
                {/* Display selected option */}
            < CustomerDetailDropdown/>

        </div>

    );
};

export default CustomerDetailsPage;
