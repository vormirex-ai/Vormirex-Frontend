import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import DashboardPage from './pages/DashboardPage';
import LandingPage from './Landingpage/LandingPage';
function App() {
  return (
    <Router>
      <Routes>
        {/* First page */}
        <Route path="/" element={<DashboardPage />} />

        {/* Landing page */}
        <Route path="/landing" element={<LandingPage />} />
      </Routes>
    </Router>
  );
}

export default App;
