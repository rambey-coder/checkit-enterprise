import React from "react";
import { Link } from "react-router-dom";
import styles from "./Login.module.css";
import { useAppContext } from "../../context/Context";
import { useSelector } from "react-redux";
import { PuffLoader } from "react-spinners";

import visible from "./assets/eye.svg";
import hidden from "./assets/eye-off.svg";

const Login = () => {
  const {
    loginUserName,
    handleBulr,
    handleChange,
    pass,
    togglePassword,
    handleToggle,
    handleLogin,
    loginUserNameError,
    passwordError,
  } = useAppContext();
  const { isLoading } = useSelector((state) => state.util);

  return (
    <div className={styles.cont}>
      {isLoading && (
        <div className={styles.puff}>
          <PuffLoader color={"#031D40"} />
        </div>
      )}
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
                <form onSubmit={handleLogin}>
                  <div className={styles.form}>
                    <span>
                      <label htmlFor="name">Username</label>
                      <input
                        type="text"
                        name="UserName"
                        onChange={handleChange}
                        onBlur={handleBulr}
                        value={loginUserName}
                      />
                      {loginUserNameError ? (
                        <p className={styles.err}>{loginUserNameError}</p>
                      ) : (
                        ""
                      )}
                    </span>

                    <span>
                      <label htmlFor="password">Password</label>
                      <input
                        type={togglePassword ? "text" : "password"}
                        name="pass"
                        onChange={handleChange}
                        onBlur={handleBulr}
                        value={pass}
                      />
                      <img
                        src={togglePassword ? visible : hidden}
                        alt=""
                        onClick={handleToggle}
                      />

                      {passwordError ? (
                        <p className={styles.err}>{passwordError}</p>
                      ) : (
                        ""
                      )}
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
    </div>
  );
};

export default Login;
