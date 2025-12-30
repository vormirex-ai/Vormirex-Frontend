import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

// Layouts
import AppLayout from './components/layout/AppLayout';
import DashboardWrapper from './components/layout/DashboardWrapper';

// Pages
import DashboardPage from './pages/DashboardPage';
import CourseDetails from './components/layout/CoursePage';
import VormirexAuth from './components/login/login';
import VormirexLanding from '../../Vormirex-Frontend/src/pages/LandingPage';
// Custom Features
import BoosterPack from './CustomCourses/BoosterPack';
import CodingMastery from './CustomCourses/CodingMastery';
import ExamPrep from './CustomCourses/ExamPrep';
import YourProgress from './CustomCourses/YourProgress';
import SavedChats from './CustomCourses/SavedChats';

// Navbar
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* 🔥 Default route → Dashboard */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* Landing Page (opens only on button click) */}
        <Route
          path="/landing"
          element={
            <>
              <Navbar />
              <VormirexLanding />
            </>
          }
        />

        {/* Auth */}
        <Route path="/auth" element={<VormirexAuth />} />
        <Route
          path="/auth/signup"
          element={<VormirexAuth defaultTab="signup" />}
        />

        {/* Dashboard */}
        <Route element={<DashboardWrapper />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* Other pages */}
        <Route element={<AppLayout />}>
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/custom/booster-pack" element={<BoosterPack />} />
          <Route path="/custom/coding-mastery" element={<CodingMastery />} />
          <Route path="/custom/exam-prep" element={<ExamPrep />} />
          <Route path="/custom/your-progress" element={<YourProgress />} />
          <Route path="/custom/saved-chats" element={<SavedChats />} />
        </Route>

        {/* 404 */}
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
              <a
                href="/dashboard"
                style={{ color: '#6aece1', fontSize: '1.2rem' }}
              >
                ← Back to Dashboard
              </a>
            </div>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
