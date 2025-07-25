import { Button, TextInput, Container, Title } from "@mantine/core";
import { Link } from "react-router-dom";
const Dashboard = () => {
  return (
    <div>
      <h1>GlucoGuide</h1>
      <Link to='/register'>
        <Button>Get Started</Button>
      </Link>
    </div>
  );
};
export default Dashboard;
