import { Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";
import { Link } from "react-router-dom";
const Auth = () => {
  return (
    <div>
      <h1>Register</h1>
      <span>Already registered?--</span>
      <Link to='/login'>
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default Auth;
