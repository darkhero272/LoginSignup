import React, { use, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <div className="container">
      <div className="header">
        <div className="text">Welcome</div>
        <div className="underline"></div>
      </div>
      <div className="submit-container">
        <div
          onClick={() => {
            navigate("../");
          }}
        >
          Back
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
