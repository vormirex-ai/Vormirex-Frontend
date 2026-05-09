// import { Routes, Route } from "react-router-dom";
// import LandingLayout from "./components/layouts/LandingLayout";
// import Login from "./pages/auth/login";
// import SignUp from "./pages/auth/sign-up";
// import ForgotPassword from "./pages/auth/forgot-password";
// import DashboardHome from "./pages/dashboard/DashboardHome";
// import ResetPasswordPage from "./pages/auth/reset-password";
// import Onboarding from "./pages/auth/onboarding";


// function App() {

//   return (

//     <Routes>
//       <Route path="/" element={<LandingLayout />} />
//       <Route path="/login" element={<Login />} />
//       <Route path="/sign-up" element={<SignUp />} />
//       <Route path="/forgot-password" element={<ForgotPassword />} />
//       <Route path="/reset-password" element={<ResetPasswordPage />} />
//       <Route path="/onboarding" element={<Onboarding />} />


//       {/* =================== DASHBOARD ====================== */}
//       <Route path="/dashboard" element={<DashboardHome />} />
//     </Routes>
//   )
// }

// export default App

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

function App() {
  return (
    <Routes>
      <Route path="/" element={<LandingLayout />} />

      {/* Auth Routes */}
      <Route element={<AuthLayout />}>
        <Route path="/login" element={<Login />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
        <Route path="/reset-password" element={<ResetPasswordPage />} />
        <Route path="/onboarding" element={<Onboarding />} />
      </Route>

      {/* Dashboard */}
      {/* <Route path="/dashboard" element={<DashboardHome />} /> */}
      <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="ai-chat" element={<AiChat />} />
      </Route>
    </Routes>
  );
}

export default App;
