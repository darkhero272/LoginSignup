import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  useEffect(() => {
    // Load Google Sign-In script dynamically
    const script = document.createElement("script");
    script.src = "https://accounts.google.com/gsi/client";
    script.async = true;
    script.defer = true;
    document.body.appendChild(script);

    // Define the callback function for Google Sign-In
    window.handleCredentialResponse = (response) => {
      console.log("Encoded JWT ID token: ", response.credential);
      // Send token to backend for verification (optional)
      navigate("/Dashboard"); // Redirect after successful sign-in
    };
  }, [navigate]);

  const handleClick = (clickedAction) => {
    if (action === clickedAction) {
      navigate("/Dashboard");
    } else {
      setAction(clickedAction);
    }
  };

  return (
    <div className="container">
      <div className="header">
        <div className="text">{action}</div>
        <div className="underline"></div>
      </div>
      <div className="inputs">
        {action === "Login" ? null : (
          <div className="input">
            <img src={user_icon} alt="" />
            <input type="text" placeholder="Name" />
          </div>
        )}

        <div className="input">
          <img src={email_icon} alt="" />
          <input type="email" placeholder="Email" />
        </div>
        <div className="input">
          <img src={password_icon} alt="" />
          <input type="password" placeholder="Password" />
        </div>

        {action === "Sign Up" ? null : (
          <div className="forgot-password">
            Forgot Password? <span>Click Here</span>
          </div>
        )}

        {/* Google Sign-In Button */}
        <div id="g_id_onload google-btn"
             data-client_id="YOUR_CLIENT_ID"
             data-context="signin"
             data-callback="handleCredentialResponse"
             data-auto_select="true">
        </div>
        
        <div className="g_id_signin " data-type="standard"></div>

        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => handleClick("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => handleClick("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
