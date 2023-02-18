// import axios from "axios";
import { createContext, useState, useContext } from "react";
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
  const [error, setError] = useState(false);

  const emailTest = new RegExp(/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/);
  const passwordTest = new RegExp(/^["0-9a-zA-Z!@#$&()\\-`.+,/"]{8,}$/);
  const usernameTest = new RegExp(/"^[A-Za-z][A-Za-z0-9_]{5,29}$"/);

  const handleToggle = () => {
    setTogglePassword(!togglePassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      !emailTest.test(email) ||
      !usernameTest.test(username) ||
      !passwordTest.test(password)
    ) {
      setError(true);

      setTimeout(() => {
        setError(false);
      }, 2000);
    }
  };

  // const handleEmail = () => {
  //   if (!emailTest.test(email)) {
  //     setError(true);

  //     setTimeout(() => {
  //       setError(false);
  //     }, 2000);
  //   }
  // };

  // const handleusername = () => {
  //   if (!usernameTest.test(username)) {
  //     setError(true);

  //     setTimeout(() => {
  //       setError(false);
  //     }, 2000);
  //   }
  // };

  // const handlepassword = () => {
  //   if (!passwordTest.test(password)) {
  //     setError(true);

  //     setTimeout(() => {
  //       setError(false);
  //     }, 2000);
  //   }
  // };

  return (
    <AppContext.Provider
      value={{
        username,
        setUsername,
        email,
        setEmail,
        password,
        setPassword,
        togglePassword,
        handleToggle,
        error,
        handleSubmit,
        // handleEmail,
        // handlepassword,
        // handleusername,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
