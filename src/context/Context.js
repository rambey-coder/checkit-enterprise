import { createContext, useState, useContext } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { SignIn } from "../services/auth";
import { SignUp } from "../services/auth";
import { SignOut } from "../services/auth";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [togglePassword, setTogglePassword] = useState(false);
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);

  // signin
  const [userName, setUserName] = useState("");
  const [pass, setPass] = useState("");

  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const passwordTest = new RegExp(/^["0-9a-zA-Z!@#$&()\\-`.+,/"]{8,}$/);
  const usernameTest = new RegExp(/^[A-Za-z]{5,29}$/);

  const navigate = useNavigate();

  const handleToggle = () => {
    setTogglePassword(!togglePassword);
  };

  //signup
  const handleSubmit = async (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    if (
      !usernameTest.test(username) &&
      !passwordTest.test(password) &&
      !emailTest.test(email)
    ) {
      setNameError(true);
      setPassError(true);
      setEmailError(true);
      setTimeout(() => {
        setPassError(false);
        setNameError(false);
        setEmailError(false);
      }, 3000);
    } else {
      try {
        const res = await SignUp(data);
        if (res) {
          toast.success(res?.data?.message);
          navigate("/profile");
        }
      } catch (error) {
        if (error) {
          toast.error(error?.response?.data?.message);
          navigate(null);
        }
      }
    }
  };

  //sign in
  const handleLogin = async (e) => {
    e.preventDefault();

    const data = {
      username: userName,
      password: pass,
    };

    try {
      const res = await SignIn(data);
      if (res) {
        toast.success(res?.data?.message);
        localStorage.setItem("user", JSON.stringify(res?.data));
        navigate("/profile");
      }
      return res?.data;
    } catch (error) {
      if (error) {
        toast.error(error?.response?.data?.message);
        navigate(null);
      }
    }
  };

  //sign out
  const handleLogout = () => {
    SignOut()
    navigate("/login")
  }

  return (
    <AppContext.Provider
      value={{
        setUsername,
        setEmail,
        setPassword,
        handleToggle,
        handleSubmit,
        handleLogin,
        userName,
        handleLogout,
        setUserName,
        pass,
        setPass,
        username,
        email,
        password,
        togglePassword,
        emailError,
        nameError,
        passError,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
