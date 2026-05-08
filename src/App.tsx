import { Routes, Route } from "react-router-dom";
import LandingLayout from "./components/layouts/LandingLayout";
import Login from "./pages/auth/login";
import SignUp from "./pages/auth/sign-up";
import ForgotPassword from "./pages/auth/forgot-password";
import DashboardHome from "./pages/dashboard/DashboardHome";


function App() {

  return (

    <Routes>
      <Route path="/" element={<LandingLayout />} />
      <Route path="/login" element={<Login />} />
      <Route path="/sign-up" element={<SignUp />} />
      <Route path="/forgot-password" element={<ForgotPassword />} />


      {/* =================== DASHBOARD ====================== */}
      <Route path="/dashboard" element={<DashboardHome />} />
    </Routes>
  )
}

export default App
