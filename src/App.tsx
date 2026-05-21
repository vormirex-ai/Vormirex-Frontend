import { Routes, Route } from "react-router-dom";
import LandingLayout from "./components/layouts/LandingLayout";
import AuthLayout from "./components/layouts/AuthLayout";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";
import ForgotPassword from "./pages/auth/forgot-password";
import ResetPasswordPage from "./pages/auth/reset-password";
import Onboarding from "./pages/auth/onboarding";
import DashboardHome from "./pages/dashboard/DashboardHome";
import DashboardLayout from "./components/layouts/DashboardLayout";
import Profile from "./pages/account/profile";
import VideoLearning from "./pages/dashboard/video-learning";
import PublicRoute from "./route/PublicRoute";
import ProtectedRoute from "./route/ProtectedRoute";
import SubjectPage from "./pages/dashboard/subjects";
import AIChatPage from "./pages/dashboard/AiChat";
import RoadmapPage from "./pages/dashboard/learning-roadmap";
import QuizPage from "./pages/practice/quiz";
import FlashcardPage from "./pages/practice/flash-cards";
import DailyChallengePage from "./pages/practice/daily-challenge";
import { PromodoroTimer } from "./pages/productivity/timer";
import AiInsightsPage from "./pages/analytics/Insights";
import Leaderboard from "./pages/analytics/Leaderboard";
import StudyPlannerPage from "./pages/productivity/study-planner";
import CourseDetails from "./pages/dashboard/course-detail";
import NotesPage from "./pages/productivity/notes";
import InterviewBotPage from "./pages/practice/Interview-bot";
import SettingsPage from "./pages/account/settings";

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />} />

      {/* Auth Routes */}
      {/* <Route element={<PublicRoute />}> */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>
      {/* </Route> */}

      {/* Dashboard */}
      {/* <Route element={<ProtectedRoute />}> */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="subjects" element={<SubjectPage />} />
        <Route path="video-learning" element={<VideoLearning />} />
        <Route path="ai-chat" element={<AIChatPage />} />
        <Route path="roadmap" element={<RoadmapPage />} />
        <Route path="course-details" element={<CourseDetails />} />
        <Route path="settings" element={<SettingsPage />} />
      </Route>
      {/* </Route> */}


      <Route path="/practice" element={<DashboardLayout />}>
        <Route path="quiz" element={<QuizPage />} />
        <Route path="flash-cards" element={<FlashcardPage />} />
        <Route path="daily-challenges" element={<DailyChallengePage />} />
        <Route path="interview-bot" element={<InterviewBotPage />} />
      </Route>


      <Route path="/productivity" element={<DashboardLayout />}>
        <Route path="timer" element={<PromodoroTimer />} />
        <Route path="study-planner" element={<StudyPlannerPage />} />
        <Route path="notes" element={<NotesPage />} />
      </Route>

      <Route path="/analytics" element={<DashboardLayout />}>
        <Route path="Insights" element={<AiInsightsPage />} />
        <Route path="Leaderboard" element={<Leaderboard />} />
      </Route>

      {/* account */}
      <Route element={<ProtectedRoute />}>
        <Route path="/account/profile" element={<DashboardLayout />}>
          <Route index element={<Profile />} />
        </Route>
      </Route>


    </Routes>
  );
}

export default App;
