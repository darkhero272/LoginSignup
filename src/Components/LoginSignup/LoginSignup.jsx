import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./LoginSignup.css";

import user_icon from "../Assets/person.png";
import email_icon from "../Assets/email.png";
import password_icon from "../Assets/password.png";
import google_icon from "../Assets/google.png"; // Add a Google logo

const LoginSignup = () => {
  const [action, setAction] = useState("Sign Up");
  const navigate = useNavigate();

  useEffect(() => {
  const script = document.createElement("script");
  script.src = "https://accounts.google.com/gsi/client";
  script.async = true;
  script.defer = true;
  document.body.appendChild(script);

  script.onload = () => {
    if (window.google) {
      window.google.accounts.id.initialize({
          client_id: "YOUR_CLIENT_ID",
          callback: handleCredentialResponse,
        });
  
          // Render button inside #google-button-container
          window.google.accounts.id.renderButton(
            document.getElementById("google-button-container"),
            {
              theme: "outline",
              size: "large",
              width: "200",
            }
          );
        }
      };
    }, []);


  const handleGoogleSignIn = () => {
    window.google?.accounts.id.prompt();
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

        {/* Google Sign-In Button Container */}
        <div className="submit-container">
          <div id="google-button-container"></div>
        </div>


        <div className="submit-container">
          <div
            className={action === "Login" ? "submit gray" : "submit"}
            onClick={() => handleGoogleSignIn("Sign Up")}
          >
            Sign Up
          </div>
          <div
            className={action === "Sign Up" ? "submit gray" : "submit"}
            onClick={() => handleGoogleSignIn("Login")}
          >
            Login
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;
