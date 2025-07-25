import {
  Button,
  // Checkbox,
  // Group,
  // NativeSelect,
  // NumberInput,
  Paper,
  // PasswordInput,
  // TextInput,
  Flex,
  Center,
  Avatar,
  Title,
  useMantineTheme,
} from "@mantine/core";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { IconUser } from "@tabler/icons-react";
import axios from "axios";
import "./auth.css";
import "../../assets/profile.webp";
const Auth = () => {
  const theme = useMantineTheme();
  const navigate = useNavigate();
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/chiefboard");
    }
  }, []);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    age: 0,
    gender: "",
    diabetesType: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    // console.log(formData.gender);
    // console.log(formData.diabetesType);
    try {
      e.preventDefault();
      const response = await axios.post(
        `${import.meta.env.VITE_API_URL}/register`,
        formData,
        { withCredentials: true }
      );

     

      console.log(response.data.token);
      localStorage.setItem("token", response.data.token);
      console.log(formData);
      localStorage.setItem("username", formData.username);
      if (response.data.token) {
        navigate("/chiefboard");
      }
    } catch (error) {
      console.log("Error in registering user!");
      console.log("Error:", error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <Flex
          direction="column"
          justify="center"
          align="center"
          gap="md"
          shadow="xl"
          style={{
            border: "1px solid #ccc",
            borderRadius: "8px",
            width: "30%",
            padding: "1%",
          }}
          className="flex"
        >
          <Avatar color="blue" radius="xl" size="lg">
            <IconUser size="1rem" />
          </Avatar>
          <input
            type="text"
            id="name"
            name="username"
            onChange={handleChange}
            className="input"
            placeholder="Username"
          />
          <input
            type="email"
            id="email"
            name="email"
            onChange={handleChange}
            placeholder="Email"
            className="input"
          />

          <input
            type="password"
            id="password"
            name="password"
            onChange={handleChange}
            placeholder="Password"
            className="input"
          />
          <input
            type="number"
            id="age"
            name="age"
            onChange={handleChange}
            placeholder="Age"
            className="input"
          />
          <select name="gender" id="gender" onChange={handleChange}>
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
          </select>

          <select name="diabetesType" id="dtype" onChange={handleChange}>
            <option value="">Select Diabetes Type</option>
            <option value="type1">Type 1</option>
            <option value="type2">Type 2</option>
            <option value="gestational">Gestational</option>
          </select>
          <Button type="submit" className="neumorphic-button">
            Register
          </Button>
        </Flex>
      </form>
      <span>Already registered?--</span>
      <Link to="/login">
        <span>Log In</span>
      </Link>
    </div>
  );
};

export default Auth;
