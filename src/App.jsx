import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Auth from "./pages/auth/Auth";
import Login from "./pages/Login/Login";
import ChiefBoard from "./pages/chiefBoard/ChiefBoard";
import CreateMeal from "./pages/createMeal/CreateMeal";
import AddVitals from "./pages/addVitals/AddVitals";
import Summary from "./pages/summary/Summary";
import { Grid, GridCol } from "@mantine/core";
import { SideBar } from "../Components/SideBar";
import { useState, useEffect, useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {
  console.log(useContext(AuthContext).isAuthenticated);
  const setIsAuthenticated = useContext(AuthContext).setIsAuthenticated;
  
  useEffect(() => {
    if (localStorage.getItem("token")) setIsAuthenticated(true);
  }, []);

  return (
    <Grid>
      {/* SideBar is visible only on screen sizes greater than or equal to small */}
      {useContext(AuthContext).isAuthenticated && (
        <GridCol span={2} visibleFrom="sm">
          <SideBar />
        </GridCol>
      )}
      <GridCol span="auto">
        <Router>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/register" element={<Auth />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chiefboard" element={<ChiefBoard />} />
            <Route path="/createmeal" element={<CreateMeal />} />
            <Route path="/addvitals" element={<AddVitals />} />
            <Route path="/summary" element={<Summary />} />
          </Routes>
        </Router>
      </GridCol>
    </Grid>
  );
}

export default App;
