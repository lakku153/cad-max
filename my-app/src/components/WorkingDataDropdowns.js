import React, { useState } from 'react';
import './WorkingDataDropdowns.css'; // Import the CSS for styling

// Predefined mock data for tasks
const taskData = {
  'Task 1 - Day 1': {
    id: 'T1-D1',
    department: 'Engineering',
    area: 'Design',
    cost: '$500',
    clientName: 'Client A'
  },
  'Task 2 - Day 1': {
    id: 'T2-D1',
    department: 'Engineering',
    area: 'Development',
    cost: '$700',
    clientName: 'Client B'
  },
  'Task 3 - Day 1': {
    id: 'T3-D1',
    department: 'Marketing',
    area: 'Campaigns',
    cost: '$300',
    clientName: 'Client C'
  },
  'Task 4 - Day 1': {
    id: 'T4-D1',
    department: 'Sales',
    area: 'Sales Team',
    cost: '$1000',
    clientName: 'Client D'
  },
  'Task 5 - Day 1': {
    id: 'T5-D1',
    department: 'Support',
    area: 'Customer Service',
    cost: '$400',
    clientName: 'Client E'
  },
  // Repeat similar data for other days if necessary
};

const WorkingDataDropdowns = () => {
  const [selectedTasks, setSelectedTasks] = useState({});

  // Handle dropdown value change
  const handleDropdownChange = (day, event) => {
    const task = event.target.value;
    setSelectedTasks({
      ...selectedTasks,
      [day]: task,
    });
  };

<<<<<<< HEAD
  // Function to format the date
  const formatDate = (date) => {
    return date.toLocaleDateString('en-US', {
      weekday: 'short', // Show the day of the week (e.g., Mon, Tue)
      month: 'short',   // Show month abbreviation (e.g., Jan, Feb)
      day: 'numeric',   // Show day number
    });
  };

  // Calculate "Today", "Yesterday", and the last 5 days
  const getDateLabels = () => {
    const dates = [];
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(today.getDate() - 1);

    // Add "Today" and "Yesterday" to the labels
    dates.push('Today', 'Yesterday');

    // Add the last 5 days before yesterday
    for (let i = 2; i <= 6; i++) {
      const previousDay = new Date(yesterday);
      previousDay.setDate(yesterday.getDate() - i+1);
      dates.push(formatDate(previousDay));
    }

    return dates // Reverse the array to make sure the most recent day is at the top
  };

  // Create the labels for the dropdowns
  const dateLabels = getDateLabels();

  // Create dropdowns for the last 7 days with corresponding labels
  const dropdowns = dateLabels.map((label, index) => {
    const day = label;  // Set the label as the day (Today, Yesterday, etc.)
    const options = Object.keys(taskData); // List of all task options for each day

    return (
      <div key={day} className="dropdown-container">
        <label htmlFor={day} className="dropdown-label">{label}</label>
=======
  // Create dropdowns for the last 7 days
  const dropdowns = [];
  for (let i = 0; i < 7; i++) {
    const day = `Day ${i + 1}`;
    const options = Object.keys(taskData); // List of all task options for each day

    dropdowns.push(
      <div key={day} className="dropdown-container">
        <label htmlFor={day} className="dropdown-label">{day}</label>
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
        <select
          id={day}
          value={selectedTasks[day] || ""}
          onChange={(e) => handleDropdownChange(day, e)}
          className="dropdown"
        >
          <option value="">Select a task</option>
          {options.map((task, index) => (
            <option key={index} value={task}>{task}</option>
          ))}
        </select>

        {/* Display additional fields if a task is selected */}
        {selectedTasks[day] && taskData[selectedTasks[day]] && (
          <div className="task-details">
            <div><strong>ID:</strong> {taskData[selectedTasks[day]].id}</div>
            <div><strong>Department:</strong> {taskData[selectedTasks[day]].department}</div>
            <div><strong>Area:</strong> {taskData[selectedTasks[day]].area}</div>
            <div><strong>Cost:</strong> {taskData[selectedTasks[day]].cost}</div>
            <div><strong>Client Name:</strong> {taskData[selectedTasks[day]].clientName}</div>
          </div>
        )}
      </div>
    );
<<<<<<< HEAD
  });
=======
  }
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442

  return (
    <div className="working-data-container">
      <h2 className="working-data-header">Select Working Data for the Last 7 Days</h2>
      <div className="dropdowns-wrapper">
        {dropdowns}
      </div>
    </div>
  );
};

export default WorkingDataDropdowns;
