import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCurrentUser } from "./services/auth";

export function RequireToken() {
  let auth = getCurrentUser();
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }

  return <Outlet />;
}