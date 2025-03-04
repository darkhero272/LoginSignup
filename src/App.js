import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "./App.css";
import LoginSignup from "./Components/LoginSignup/LoginSignup.jsx";
import Dashboard from "./Components/Dashboard/Dashboard.jsx";

function App() {
  return (
    // <div>
    //   <LoginSignup />
    // </div>
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/Dashboard" element={<Dashboard />} />
      </Routes>
    </Router>
  );
}

export default App;
