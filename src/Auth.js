import { Navigate, Outlet, useLocation } from "react-router-dom";

// export function RequireToken() {
//   let auth = localStorageUser();
//   let location = useLocation();
//   if (!auth) {
//     return <Navigate to="/login" state={{ from: location }} />;
//   }

//   return <Outlet />;
// }

// export function Authenticated() {
//   let auth = localStorageUser();
//   if (auth) {
//     return <Navigate to="/dashboard" />;
//   }

//   return <Outlet />;
// }