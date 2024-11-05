import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';  // Your sign-in page
import Dashboard from './Dashboard';  // The new page you created


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<SignIn />} />  {/* SignIn page */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
      </Routes>
    </Router>
  );
};

export default App;