import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/auth/Auth";
import Login from "./pages/Login/Login";


function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path="/" element={<Dashboard />} />
          <Route path="/auth" element={<Auth />} />
          <Route path="/login" element={<Login/>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
