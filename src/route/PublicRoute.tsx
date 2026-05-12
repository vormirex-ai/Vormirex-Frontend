import { Navigate, Outlet, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

const PublicRoute = () => {
  const { isAuthenticated } = useSelector((state: any) => state.auth);
  const location = useLocation();

  const publicRoutes = [
    "/login",
    "/sign-up",
    "/forgot-password",
    "/reset-password",
    "/onboarding",
  ];

  const isPublicRoute = publicRoutes.some((path) =>
    location.pathname.startsWith(path)
  );

  if (isAuthenticated && isPublicRoute) {
    return <Navigate to="/dashboard" replace />;
  }

  return <Outlet />;
};

export default PublicRoute;