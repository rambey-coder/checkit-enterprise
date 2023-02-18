import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css"
import { useAppContext } from "../../context/Context";

import visible from "./assets/eye.svg"
import hidden from "./assets/eye-off.svg"

const Login = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    togglePassword,
    handleToggle,
  } = useAppContext();

   const handleSubmit = (e) => {
     e.preventDefault();
  };
  
  return (
    <div className={styles.signup_container}>
      <div className={styles.background}>
        <div className={styles.color}></div>
        <div className={styles.txt_container}>
          <h1>
            Ship with ease. <br /> <span>Remotely</span>
          </h1>
          <p>Collaborate with us to make your shippment easier</p>
        </div>
      </div>

      <div className={styles.form_container}>
        <div className={styles.form_section}>
          <h1>Sign In</h1>
          <p>Welcome back!</p>
          <div className={styles.form_content}>
            <div className={styles.forms}>
              <form onSubmit={handleSubmit}>
                <div className={styles.form}>
                  <span>
                    <label htmlFor="name">Username</label>
                    <input
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      value={username}
                    />
                  </span>

                  <span>
                    <label htmlFor="password">Password</label>
                    <input
                      type={togglePassword ? "text" : "password"}
                      onChange={(e) => setPassword(e.target.value)}
                      value={password}
                    />
                    <img
                      src={togglePassword ? visible : hidden}
                      alt=""
                      onClick={handleToggle}
                    />
                  </span>
                </div>
                <button>Sign In</button>
              </form>
            </div>
          </div>
          <p>
            Don't have an account?{" "}
            <span>
              <Link to="/">Sign up</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
