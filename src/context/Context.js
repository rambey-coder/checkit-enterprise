import { createContext, useState, useContext } from "react";
import ApiService from "../services/auth";
// import { useNavigate } from "react-router-dom";

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

  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const passwordTest = new RegExp(/^["0-9a-zA-Z!@#$&()\\-`.+,/"]{8,}$/);
  const usernameTest = new RegExp(/^[A-Za-z]{5,29}$/);

  const handleToggle = () => {
    setTogglePassword(!togglePassword);
  };

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
      const res = await ApiService.SignUp(data);
      console.log(res.data.message);
    }
  };

  return (
    <AppContext.Provider
      value={{
        setUsername,
        setEmail,
        setPassword,
        handleToggle,
        handleSubmit,
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
