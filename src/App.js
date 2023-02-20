import "./App.css";
import Login from "./pages/signIn/Login";
import SignUp from "./pages/signUp/SignUp";
import Profile from "./pages/profile/Profile";
import { Routes, Route } from "react-router-dom";
import { RequireToken } from "./Auth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div className="App">
      <ToastContainer />
      <Routes>
        <Route path="/" element={<SignUp />} />
        <Route path="/login" element={<Login />} />
        {/* protected route */}
        <Route element={<RequireToken />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
      </Routes>
    </div>
  );
}

export default App;
