import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';

/* Layouts */
import PublicLayout from './components/layout/PublicLayout';
import DashboardWrapper from './components/layout/DashboardWrapper';

/* Pages */
import LandingPage from './pages/LandingPage';
import AboutSection from './components/layout/AboutSection';
import PricingSections from './components/layout/PricingSections';
import CoursePage from './components/layout/CoursePage';
import BoosterPack from './CustomCourses/BoosterPack';
import CodingMastery from './CustomCourses/CodingMastery';
import VormirexAuth from './components/login/login';
import DashboardPage from './pages/DashboardPage';

const App: React.FC = () => {
  return (
    <Router>
      <Routes>
        {/* PUBLIC PAGES (WITH NAVBAR) */}
        <Route element={<PublicLayout />}>
          <Route path="/landing" element={<LandingPage />} />
          <Route path="/about" element={<AboutSection />} />
          <Route path="/pricings" element={<PricingSections />} />
          <Route path="/courses" element={<CoursePage />} />
          <Route path="/course/:courseId" element={<CoursePage />} />
          <Route path="/custom/booster-pack" element={<BoosterPack />} />
          <Route path="/custom/coding-mastery" element={<CodingMastery />} />
        </Route>

        {/* DASHBOARD */}
        <Route element={<DashboardWrapper />}>
          <Route path="/dashboard" element={<DashboardPage />} />
        </Route>

        {/* AUTH (NO NAVBAR) */}
        <Route path="/auth" element={<VormirexAuth />} />
        <Route
          path="/auth/signup"
          element={<VormirexAuth defaultTab="signup" />}
        />

        {/* REDIRECTS */}
        <Route path="/" element={<Navigate to="/landing" replace />} />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes>
    </Router>
  );
};

export default App;
