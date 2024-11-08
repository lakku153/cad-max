// WorkingTab.js
import React from 'react';
import DepartmentDetails from './DepartmentDetails'; // Adjust path as needed

const WorkingTab = ({ selectedDepartment, handleDepartmentChange }) => (
    <div className="working-box">
      <label htmlFor="select-department" className="select-label">
        Choose Department:
      </label>
      <select
        id="select-department"
        className="select-department"
        value={selectedDepartment}
        onChange={handleDepartmentChange}
      >
        {['Survey Department', 'Architecture Department', 'Urban Planning Department', 'Engineering Drawing Department','JDA Submission','GIS','Site Plan','Area Conversion','Sector SuperImpose','Print'].map(dept => (
          <option key={dept} value={dept}>{dept}</option>
        ))}
      </select>
      {selectedDepartment && (
        <DepartmentDetails selectedDepartment={selectedDepartment} />
      )}
    </div>
  );
  

  export default WorkingTab