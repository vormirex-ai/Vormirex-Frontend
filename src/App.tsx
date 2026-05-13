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
import AiChat from "./pages/dashboard/AiChat";
import Profile from "./pages/account/profile";
import VideoLearning from "./pages/dashboard/video-learning";
import PublicRoute from "./route/PublicRoute";
import ProtectedRoute from "./route/ProtectedRoute";
import SubjectPage from "./pages/dashboard/subjects";

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
        <Route path="ai-chat" element={<AiChat />} />
      </Route>
      {/* </Route> */}

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
