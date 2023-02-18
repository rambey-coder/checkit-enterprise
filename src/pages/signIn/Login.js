import React from "react";
import { Link } from "react-router-dom";
import "./Login.css"

const Login = () => {
   const handleSubmit = (e) => {
     e.preventDefault();
  };
  
  return (
    <div className="signup-container">
      <div className="background">
        <div className="color"></div>
        <div className="txt-container">
          <h1>
            Ship with ease. <br /> <span>Remotely</span>
          </h1>
          <p>Collaborate with us to make your shippment easier</p>
        </div>
      </div>

      <div className="form-container">
        <div className="form-section">
          <h1>Sign In</h1>
          <p>Welcome back!</p>
          <div className="form-content">
            <div className="forms">
              <form onSubmit={handleSubmit}>
                <div className="form">
                  <span>
                    <label htmlFor="name">Username</label>
                    <input type="text" />
                  </span>

                  <span>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
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
