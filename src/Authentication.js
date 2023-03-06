import { Navigate, Outlet, useLocation } from "react-router-dom";
import { getCurrentUserToken } from "./ToolKit/Features/User/service";
import Sidebar from "./components/Sidebar/Sidebar";

export const RequireToken = () => {
  let auth = getCurrentUserToken();
  let location = useLocation();
  if (!auth) {
    return <Navigate to="/login" state={{ from: location }} />;
  } else {
    <Navigate to="/profile" />;
  }

  return (
    <Sidebar>
      <Outlet />
    </Sidebar>
  );
};

export const Authenticated = () => {
  let auth = getCurrentUserToken();
  if (auth) {
    return <Navigate to="/profile" />;
  }

  return <Outlet />;
};
