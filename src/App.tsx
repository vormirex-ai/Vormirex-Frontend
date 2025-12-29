import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layouts
import AppLayout from './components/layout/AppLayout';
import DashboardWrapper from './components/layout/DashboardWrapper';

// Pages
import DashboardPage from './pages/DashboardPage';
import LandingPage from './pages/LandingPage';
import CourseDetails from './components/layout/CoursePage';
import VormirexAuth from './components/login/login';

// Custom Features
import BoosterPack from './CustomCourses/BoosterPack';
import CodingMastery from './CustomCourses/CodingMastery';
import ExamPrep from './CustomCourses/ExamPrep';
import YourProgress from './CustomCourses/YourProgress';
import SavedChats from './CustomCourses/SavedChats';

function App() {
  return (
    <Router>
      <Routes>
        {/* Login is now the STARTING page */}
        <Route path="/" element={<VormirexAuth />} />

        {/* Dashboard is moved to /dashboard */}
        <Route element={<DashboardWrapper />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* All other pages with Top Navbar */}
        <Route element={<AppLayout />}>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />

          {/* Custom Features */}
          <Route path="/custom/booster-pack" element={<BoosterPack />} />
          <Route path="/custom/coding-mastery" element={<CodingMastery />} />
          <Route path="/custom/exam-prep" element={<ExamPrep />} />
          <Route path="/custom/your-progress" element={<YourProgress />} />
          <Route path="/custom/saved-chats" element={<SavedChats />} />
        </Route>

        {/* 404 - Not Found */}
        <Route
          path="*"
          element={
            <div
              style={{
                padding: '100px',
                textAlign: 'center',
                color: '#fff',
                minHeight: '100vh',
                background: '#0a0b14',
              }}
            >
              <h1>404 - Page Not Found</h1>
              <a href="/" style={{ color: '#6aece1', fontSize: '1.2rem' }}>
                ← Back to Login
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
