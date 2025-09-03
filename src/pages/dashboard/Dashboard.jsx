import { Button } from "@mantine/core";
import { Link } from "react-router-dom";
import "./dashboard.css";

const Dashboard = () => {
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
