import { Button, TextInput, PasswordInput, Flex, Avatar } from "@mantine/core";
import { useForm } from "@mantine/form";
import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { IconUser } from "@tabler/icons-react";
import axios from "axios";
import "./login.css";
const Login = () => {
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/chiefboard");
    }
  }, []);
  const form = useForm({
    initialValues: {
      name: "",
      password: "",
    },
    validate: {
      name: (value) => (value.length > 0 ? null : "username cant be empty"),
      password: (value) =>
        value.length >= 6 ? null : "password must be atleast 6 characters",
    },
  });

  const handleSubmit = async (values) => {
    console.log("Form Submitted:", values);
    const response = await axios.post(
      `${import.meta.env.VITE_API_URL}/api/auth/login`,
      values,
      { withCredentials: true }
    );
    console.log(response);
    localStorage.setItem("token", response.data.token);
    localStorage.setItem("username", values.name);
    if (response.data.token) {
      navigate("/chiefboard");
    }
  };

  return (
    <div>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="md"
          shadow="xl"
          style={{
            width: "30%",
            margin: "auto",
            marginTop: "10%",
          }}
          className="loginFlex"
        >
          <Avatar color="blue" radius="xl" size="lg">
            <IconUser size="1rem" />
          </Avatar>
          <TextInput
            placeholder="Username"
            className="loginInput"
            {...form.getInputProps("name")}
            style={{ width: "100%" }}
            size="xl"
            radius="xl"
          />
          <PasswordInput
            placeholder="Password"
            className="loginInput"
            {...form.getInputProps("password")}
            style={{
              width: "100%",
            }}
            size="xl"
            radius="xl"
          />

          <Button
            type="submit"
            style={{
              width: "90%",
            }}
            radius="xl"
            size="md"
          >
            Log in
          </Button>
        </Flex>
      </form>
    </div>
  );
};

export default Login;
