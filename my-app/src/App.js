import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import SignIn from './SignIn';  // Your sign-in page
import Dashboard from './Dashboard';  // The new page you created
import ProfilePage from './components/ProfilePage'; // Import ProfilePage component
<<<<<<< HEAD
import GenerateBill from './components/GenerateBill';  // Import the GenerateBill component
import AccDashboard from './components/Accdashboard';  

=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442


const App = () => {
  return (
    <Router>
      <Routes>
        {/* Define routes for different pages */}
        <Route path="/" element={<SignIn />} />  {/* SignIn page */}
        <Route path="/dashboard" element={<Dashboard />} />  {/* Dashboard page */}
        <Route path="/profile" element={<ProfilePage />} /> {/* Profile page route */}
<<<<<<< HEAD
        <Route path="/bill" element={<GenerateBill />} /> {/* Profile page route */}
        <Route path="/AccDashboard" element={<AccDashboard />} /> {/* Profile page route */}
=======
>>>>>>> 8dec717e2aad4b23d862817b5a57ade3166ae442
      </Routes>
    </Router>
  );
};

export default App;