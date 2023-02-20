import React from "react";
import styles from "./SignUp.module.css";
import { Link } from "react-router-dom";
import { useAppContext } from "../../context/Context";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import visible from "./assets/eye.svg";
import hidden from "./assets/eye-off.svg";

const SignUp = () => {
  const {
    username,
    setUsername,
    password,
    setPassword,
    email,
    setEmail,
    emailError,
    togglePassword,
    nameError,
    passError,
    handleToggle,
    handleSubmit,
  } = useAppContext();

  return (
    <div className={styles.signup_container}>
    <ToastContainer />
      <div className={styles.img_background}>
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
          <h1>Sign Up</h1>
          <p>Register with us today</p>
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

                    {nameError ? (
                      <p className={styles.err}>
                        Username must be atleast 5 letters
                      </p>
                    ) : (
                      ""
                    )}
                  </span>

                  <span>
                    <label htmlFor="name">Email</label>

                    <input
                      type="email"
                      onChange={(e) => setEmail(e.target.value)}
                      value={email}
                    />

                    {emailError ? (
                      <p className={styles.err}>Add a valid email</p>
                    ) : (
                      ""
                    )}
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

                    {passError ? (
                      <p className={styles.err}>
                        Password must be atleast 8 characters
                      </p>
                    ) : (
                      ""
                    )}
                  </span>
                </div>
                <button>Sign up</button>
              </form>
            </div>
          </div>
          <p>
            Already have an account?{" "}
            <span>
              <Link to="/login">Login</Link>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default SignUp;
