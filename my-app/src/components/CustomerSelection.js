const CustomerSelection = ({ toggleNewCustomerForm }) => (
    <div className="customer-box">
      <label htmlFor="existing-customer" className="select-label">
        Select Existing Customer
      </label>
      <select id="existing-customer" className="select-customer">
        <option>Search...</option>
        <option>Customer A</option>
        <option>Customer B</option>
        <option>Customer C</option>
        {/* Add more options as needed */}
      </select>
      <div className="or-divider">
        <span>or</span>
      </div>
      <button className="add-customer-btn" onClick={toggleNewCustomerForm}>
        Add a new customer
      </button>
    </div>
  );
export default CustomerSelection;  