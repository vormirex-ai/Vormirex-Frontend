import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Existing
import CourseDetails from './components/layout/CoursePage';
import DashboardPage from './pages/DashboardPage';
import LandingPage from './Landingpage/LandingPage';

// Custom Features (now in src/features/)
import BoosterPack from './CustomCourses/BoosterPack';
import CodingMastery from './CustomCourses/CodingMastery';
import ExamPrep from './CustomCourses/ExamPrep';
import YourProgress from './CustomCourses/YourProgress';
import SavedChats from './CustomCourses/SavedChats';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<DashboardPage />} />
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/course/:courseId" element={<CourseDetails />} />

        {/* Custom Features */}
        <Route path="/custom/booster-pack" element={<BoosterPack />} />
        <Route path="/custom/coding-mastery" element={<CodingMastery />} />
        <Route path="/custom/exam-prep" element={<ExamPrep />} />
        <Route path="/custom/your-progress" element={<YourProgress />} />
        <Route path="/custom/saved-chats" element={<SavedChats />} />

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
              }}
            >
              <h1>404 - Page Not Found</h1>
              <a
                href="/"
                style={{ color: 'var(--color-teal)', fontSize: '1.2rem' }}
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
