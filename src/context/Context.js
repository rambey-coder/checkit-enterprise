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

  return (
    <AppContext.Provider
      value={{ username, setUsername, email, setEmail, password, setPassword }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
