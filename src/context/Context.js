import { createContext, useState, useContext, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { SignUp, SignIn, SignOut } from "../ToolKit/Features/User/service";
import { createOrder } from "../ToolKit/Features/Order/Service";
import { useDispatch } from "react-redux";
import { getCurrentUserToken } from "../ToolKit/Features/User/service";

const AppContext = createContext(null);

export const useAppContext = () => {
  const context = useContext(AppContext);

  return context;
};

const ContextProvider = ({ children }) => {
  const dispatch = useDispatch();
  // bug noticed: on user track order => fetch the data again once user edit an order && same on admin plus a back arrow && admin order
  // refactor order detail page: make it a fully page where they can edit and delete

  // check account type to dissplay certain info
  const accountType = getCurrentUserToken();
  const [adminAccount, setAdminAccount] = useState(false);
  // if (accountType) {
  // }
  useEffect(() => {
    if (accountType && accountType.roles) {
      setAdminAccount(accountType.roles.includes("ROLE_ADMIN"));
    }
  }, [accountType]);
  // <!--- --->

  // <!--- --->

  const [pageNo, setPageNo] = useState(0);

  const [pageSize] = useState(10);

  // <!--- --->

  // sign up state
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [phoneNumber, setphoneNumber] = useState(undefined);

  // signup error state
  const [emailError, setEmailError] = useState(false);
  const [nameError, setNameError] = useState(false);
  const [passError, setPassError] = useState(false);
  const [phoneNumberError, setphoneNumberError] = useState(false);

  const [togglePassword, setTogglePassword] = useState(false);

  // sign in state
  const [loginUserName, setloginUserName] = useState("");
  const [loginPassword, setLoginPassword] = useState("");

  // sign in error state
  const [loginUserNameError, setloginUserNameError] = useState(false);
  const [passwordError, setPasswordError] = useState(false);

  const emailTest = new RegExp(/\S+@\S+\.\S+/);
  const passwordTest = new RegExp(
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,10}$/
  );
  const usernameTest = new RegExp(/^[A-Za-z]{5,29}$/);
  const phoneNumberTest = new RegExp(
    /^[+]*[(]{0,3}[0-9]{1,4}[)]{0,1}[-\s./0-9]{8,15}$/
  );

  // create order
  const [orderLink, setOrderLink] = useState("");
  const [orderAddress, setOrderAddress] = useState("");
  const [trackRes, setTrackRes] = useState(false);

  const handleCreateOrder = (e) => {
    e.preventDefault();
    const data = {
      links: orderLink,
      deliveryAddress: orderAddress,
    };

    const res = dispatch(createOrder(data, setTrackRes, trackRes));
    if (res) {
      setOrderAddress("");
      setOrderLink("");
    } 

    return res;
  };

  const navigate = useNavigate();

  // toggle password visibility
  const handleToggle = () => {
    setTogglePassword(!togglePassword);
  };

  // input value
  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case "username":
        setUsername(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      case "UserName":
        setloginUserName(value);
        break;
      case "pass":
        setLoginPassword(value);
        break;
      case "number":
        setphoneNumber(value);
        break;
      default:
        break;
    }
  };

  const handleBlur = (e) => {
    const { name } = e.target;
    validateField(name);
  };

  const removeError = () => {
    setTimeout(() => {
      setPassError(false);
      setNameError(false);
      setEmailError(false);
      setloginUserNameError(false);
      setPasswordError(false);
      setphoneNumberError(false);
    }, 3000);
  };

  const validateField = (name) => {
    let isValid = false;
    switch (name) {
      case "username":
        isValid = validatUsername();
        break;
      case "email":
        isValid = validateEmail();
        break;
      case "password":
        isValid = validatePassword();
        break;
      case "UserName":
        isValid = validatUserName();
        break;
      case "pass":
        isValid = validatePass();
        break;
      case "number":
        isValid = ValidateNumber();
        break;
      default:
        break;
    }
    return isValid;
  };

  // signup validate
  const validatePassword = () => {
    let passwordError = "";
    const value = password;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordTest.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    setPassError(passwordError);
    return passwordError === "";
  };

  const validateEmail = () => {
    let emailError = "";
    const value = email;
    if (value.trim() === "") emailError = "Email Address is required";
    else if (!emailTest.test(value)) emailError = "Email is not valid";
    setEmailError(emailError);
    return emailError === "";
  };

  const validatUsername = () => {
    let usernameError = "";
    const value = username;
    if (value.trim() === "") usernameError = "Username is required";
    else if (!usernameTest.test(value))
      usernameError = "Username must be atleast 5 characters";
    removeError();
    setNameError(usernameError);
    return usernameError === "";
  };
  //

  // sign in validate
  const validatePass = () => {
    let passwordError = "";
    const value = loginPassword;
    if (value.trim() === "") passwordError = "Password is required";
    else if (!passwordTest.test(value))
      passwordError =
        "Password must contain at least 8 characters, 1 number, 1 upper and 1 lowercase!";
    removeError();
    setPasswordError(passwordError);
    return passwordError === "";
  };

  const validatUserName = () => {
    let usernameError = "";
    const value = loginUserName;
    if (value.trim() === "") usernameError = "Username is required";
    else if (!usernameTest.test(value))
      usernameError = "Username must be atleast 5 characters";
    removeError();
    setloginUserNameError(usernameError);
    return usernameError === "";
  };

  const ValidateNumber = () => {
    let phoneNumberError = "";
    const value = phoneNumber;
    if (value < 0) phoneNumberError = "Telephone number is required";
    else if (!phoneNumberTest.test(value))
      phoneNumberError = "Telephone number must be atleast 8 number";
    removeError();
    setphoneNumberError(phoneNumberError);
    return phoneNumberError === "";
  };
  //

  //signup
  const handleSubmit = (e) => {
    e.preventDefault();

    const data = {
      username: username,
      email: email,
      password: password,
    };

    const formFields = ["username", "email", "password"];

    let isValid = true;
    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });

    if (isValid) {
      const res = dispatch(SignUp(data));

      return res;
    }
  };

  //sign in
  const handleLogin = async (e) => {
    e.preventDefault();

    const formFields = ["UserName", "pass"];

    let isValid = true;
    formFields.forEach((field) => {
      isValid = validateField(field) && isValid;
    });

    const data = {
      username: loginUserName,
      password: loginPassword,
    };

    if (isValid) {
      const res = dispatch(SignIn(data));

      return res;
    }
  };

  //sign out
  const handleLogout = () => {
    SignOut();
    navigate("/login");
  };

  return (
    <AppContext.Provider
      value={{
        handleBlur,
        handleChange,
        handleToggle,
        handleSubmit,
        handleLogin,
        loginUserName,
        handleLogout,
        setloginUserName,
        loginPassword,
        setLoginPassword,
        username,
        email,
        password,
        togglePassword,
        emailError,
        nameError,
        passError,
        loginUserNameError,
        passwordError,
        phoneNumber,
        phoneNumberError,
        orderAddress,
        orderLink,
        handleCreateOrder,
        setOrderAddress,
        setOrderLink,
        trackRes,
        setTrackRes,
        adminAccount,
        pageNo,
        pageSize,
        setPageNo
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

export default ContextProvider;
