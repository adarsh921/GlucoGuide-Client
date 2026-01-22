import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./dashboard.css";
import { AuthContext } from "../../context/AuthContext";
import { useContext } from "react";

const Dashboard = () => {
  const setIsAuthenticated = useContext(AuthContext).setIsAuthenticated;
  localStorage.removeItem("token");
  setIsAuthenticated(false);
  return (
    <div className="landing-page">
      {/* Navbar */}
      <nav className="navbar">
        <div className="logo">GlucoGuide</div>
        <Link to="/register">
          <Button size="md" variant="white">
            Get Started
          </Button>
        </Link>
      </nav>

      {/* You can later add hero section here */}
    </div>
  );
};

export default Dashboard;
