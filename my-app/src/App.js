import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';  // Your sign-in page
import Dashboard from './Dashboard';  // The new page you created
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<SignIn />} />  {/* SignIn page */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
      </Routes>
    </Router>
  );
};

export default App;