import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const ProtectedRoute = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const location = useLocation();

  const isDashboardRoute = location.pathname.startsWith("/dashboard");

  if (!isAuthenticated && isDashboardRoute) {
    return <Navigate to="/login" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;