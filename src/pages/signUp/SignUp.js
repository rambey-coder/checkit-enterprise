import React from "react";
import "./SignUp.css"
import { Link } from "react-router-dom";

const SignUp = () => {
    const handleNavigate = () => { }
    
  return (
    <div className="signup-container">
      <div className="img-background">
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
          <h1>Sign Up</h1>
          <p>Register with us today</p>
          <div className="form-content">
            <div className="forms">
              <form>
                <div className="form">
                  <span>
                    <label htmlFor="name">Username</label>
                    <input type="text" />
                  </span>

                  <span>
                    <label htmlFor="name">Email</label>
                    <input type="email" />
                  </span>
                </div>
                <div className="form">
                  <span>
                    <label htmlFor="mail">Role</label>
                    <input type="text" />
                  </span>

                  <span>
                    <label htmlFor="password">Password</label>
                    <input type="password" />
                  </span>
                </div>
                <button onClick={handleNavigate}>Sign up</button>
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
