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

function App() {
  return (
    <Grid>
      <GridCol span={2}>
        <SideBar />
      </GridCol>
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
