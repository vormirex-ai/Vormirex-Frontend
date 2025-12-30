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
import LandingPage from './pages/LandingPage';
// Custom Features
import BoosterPack from './CustomCourses/BoosterPack';
import CodingMastery from './CustomCourses/CodingMastery';
import ExamPrep from './CustomCourses/ExamPrep';
import YourProgress from './CustomCourses/YourProgress';
import SavedChats from './CustomCourses/SavedChats';

// Auth Components
import VerifyEmail from './components/auth/VerifyEmail';
import ResetPassword from './components/auth/ResetPassword';
import OAuthSuccess from './components/auth/OAuthSuccess';

// Navbar
import Navbar from './components/common/Navbar';

function App() {
  return (
    <Router>
      <Routes>
        {/* ✅ DEFAULT → DASHBOARD */}
        <Route path="/" element={<Navigate to="/dashboard" replace />} />

        {/* 🌟 LANDING PAGE (manual open only) */}
        <Route
          path="/landing"
          element={
            <>
              <Navbar />
              <LandingPage />
            </>
          }
        />

        {/* Auth */}
        <Route path="/auth" element={<VormirexAuth />} />
        <Route
          path="/auth/signup"
          element={<VormirexAuth defaultTab="signup" />}
        />
        <Route path="/verify-email" element={<VerifyEmail />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/oauth-success" element={<OAuthSuccess />} />

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
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </Router>
  );
}

export default App;
